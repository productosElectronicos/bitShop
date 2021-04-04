# Guía de contribución para el proyecto **BitShop**

## Requisitos prevíos:

## 1. Instalar Meteor (Framework utilizado para la aplicación)

### Windows (requiere [node](https://nodejs.org/es/))
```shell
npm install -g meteor
```

### Linux / OSX 
```shell
curl https://install.meteor.com/ | sh
```

### Documentación oficial
```
https://docs.meteor.com/#/full/
```

### Tutorial 
```
https://react-tutorial.meteor.com/
```
<hr/>

## 2. En caso de querer aportar con respecto al back-end: 

### 2.1 Tener conocimientos de JavaScript

### 2.2 Tener conocimientos de como funciona internamente Meteor

### 2.1 Tener conocimientos de programación funcional

<hr/>

## 3. En caso de querar aportar con respecto al front-end
### 3.1 Tener conocimientos de React (Componentes de clase o componentes funcionales con hooks)

### 3.2 Tener conocimientos de JavaScript

### 3.3 Tener conocimientos de programación funcional

<hr/>

## 4. Manejo de ramas
**No se debe realizar un commit directamente a main o staging.**

Para todo el manejo de ramas se debe seguir la siguiente guía: 

1. Crear ramas de una funcionalidad desde staging
2. Una vez finalizada la codificación de la funcionalidad con las respectivas pruebas, crear el pull request con rama base **staging**
3. Asignar como Reviewers a @Jtorome o a @jumarinr
4. Esperar aprobación del Pull Request. 

# Guía de contribución backend

## 1. Orden de imports

<p> 
Los imports deberán ir siempre al inicio del archivo. No pueden haber constantes por encima de el ni funciones, clases o cualquier tipo de estructura de datos. Deben seguir el siguiente orden:
</p>

```javascript
// módulo entero
import './moduleName';

// librerias que importan miembros {}
import { moduleName } from 'library';

// librerias con exports by default
import moduleName from 'library';

// custom exports con miembros {}
import { moduleName } from '../../moduleName';

// custom exports by default
import moduleName from '../../moduleName';
```

<hr/>

## 2. Nombrado de variables y funciones

### Se plantea utilizar: 
- CamelCase para definir funciones, variables y atributos constantes no auxiliares 
```javascript 
const myFunction = () => {};

let myVariable = 1;

const myArray = [];
```
- UpperCamelCase para definir imports de colecciones o librerias

```javascript 
import React from 'react';

import MyCollection from 'collectionName';
```

- UpperCase separado por "_" para definir constantes auxiliares
```javascript 
const MY_CONSTANT = 12;
```

<hr/>

## 3. Documentación de funciones

Para la documentación de funciones se va a utilizar [JSDoc](https://jsdoc.app/)

```javascript
// ejemplo 1

/**
 * @typedef Retorno
 * @property {String} a
 * @property {Number} b
*/

/**
 * Función de prueba
 * @param {String} a variable a
 * @param {Number} b variable b
 * @returns {Retorno}
*/
const testFunction = (a, b) => {
  return {
    a,
    b,
  }
}
```

### **Nota:** Para funciones con más de 2 parametros de entrada, se deberá pedir como parametro de entrada un objeto en el cual, los atributos sean los parametros de entrada. Esto para evitar inconvenientes en el orden de los parametros y enviar valores no esperados. Ejemplo: 

```javascript
// <- not accepted

/**
 * Función de prueba
 * @param {String} a variable a
 * @param {Number} b variable b
 * @param {Number} c variable c
 * @param {Number} d variable d
*/
const testFunction1 = (a, b, c, d) => {

}

// que tengo que hacer para llamar la funcion testFunction1?

// tengo que pasar los parametros en el mismo orden que los definí en la función
testFunction1(a, b, c, d);
```

```javascript
// <- accepted

/**
 * Función de prueba
 * @param {Object} entrada
 * @param {String} entrada.a variable a
 * @param {Number} entrada.b variable b
 * @param {Number} entrada.c variable c
 * @param {Number} entrada.d variable d
*/
const testFunction2 = ({ a, b, c, d }) => {

}

// que tengo que hacer para llamar la funcion testFunction2?

// No tengo que pasar los parametros en el mismo orden en que los definí.
testFunction1({ d, c, a, b});
```

<hr/>

## 4. Documentación de constantes auxiliares

Definimos el tipo de dato y que es por defecto dado que es una constante auxiliar.

```javascript 
/** 
 * @constant
 * @type {String}
 * @default
*/
const MY_CONSTANT = 'FF0000';
```

## 5. Preferencia de exports

```javascript
// si solo se va a exportar una función, una estructura de datos, se deberá realizar un export default

const MY_CONSTANT = 3;

export default MY_CONSTANT;

// si se va a exportar más de una función, estructura de datos, no se debe exportar default sino que se exporta cada uno de estos de la siguiente manera: 

export const MY_CONSTANT = 3;

export const myFunction = () => {};

// Cabe aclarar que habrán casos donde se requiera que además de realizar un export default, se exporten otros elementos, este caso tambíen es válido
```

<hr/>

## 6. Validaciones
Para las validaciones necesarias, haremos uso de la librería de [simple-schema](https://www.npmjs.com/package/simpl-schema)

<hr/>

## 7. Meteor Methods.

Se dividirá en dos partes la creación de meteor methods. 

1. **Validación de parametros de entrada y retorno al front-end:**  Se creará una carpeta alojada en la ruta ```imports/api```
con el tema de la funcionalidad que se desarrollará. Ejemplo: Estoy trabajando en el CRUD de usuarios, por ende, mi carpeta sería ```imports/api/usuarios```. Dentro de está se creará un archivo que se encargará de validar que se envien correctamente los parametros de entrada enviados y pasar la referencia del usuario autenticado. Ejemplo: 

```javascript
// se creará un archivo llamado editarUsarioMethod.js

// se importa lo necesario
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

// en el punto 2, veremos que hay dentro de la función editar usuario.
import editarUsario from './editarUsario';

const editarUsarioMethod = new ValidatedMethod({
  name: 'editarUsario',
  validate: new SimpleSchema({
    nombre: { type: String },
    numeroTelefonico: { type: Number, optional: true }
  }).validator(),
  run({ nombre, numeroTelefonico }) {
    const editaUsuario = editarUsario({
      usuarioContext: Meteor.user();
      nombre,
      numeroTelefonico,
    })

    return editaUsuario;
  },
});

export default editarUsarioMethod;
```
Una vez creado el método, se debe crear un indice (esto por si se tienen varios métodos dentro de una misma carpeta)

```javascript
// creamos el archivo index.js

// importamos los métodos creados
import editarUsarioMethod from './editarUsarioMethod';

// exportamos los métodos
export default {
  editarUsarioMethod,
}
```

Por último, dentro de la ruta ```imports/startup/ ``` en el archivo  ```api.js``` se importará el indice. 

```javascript
import '../api/usuarios/index';
```

2. **Lógica de la función:** Se creará una función que se encargará de tener toda la lógica interna. Esto con el fin de tener que utilizar solamente la función sin necesidad de llamar un método.

```javascript
// se crea el archivo editarUsario.js

// importamos lo necesario, para este ejemplo se importará una colección (revisar punto 8 de ser necesario)

import Usuario from '../../collections/usuario';

const editarUsario = ({
  usuarioContext, nombre, numeroTelefonico,
}) => {
  const editoElUsuario = Usuario.update({
    _id: usuarioContext._id
  }, {$set: {
    nombre, 
    numeroTelefonico,
  }})

  return editoElUsuario;
}

export default editarUsario;
```

<hr/>

## 8. Colecciones

### 8.1 **Definición de colecciones**
Por convención, el nombre de la colección debe ir en camelcase, sin embargo, la variable a la que hace referencia la colección debe ser en uppercamelcase. La colección se debe crear en la ruta ```imports/api/collections``` y el archivo se debe nombrar con el nombre de la colección.

Ejemplo:

```javascript
// creamos el archivo productos.js

// importamos mongodb
import { Mongo } from 'meteor/mongo';

// creamos colección de productos
const Productos = new Mongo.Collection('productos');

Productos.indexes = [];

export default Productos;
```

### **8.2 Export de la colección**

Una vez creada la colección, se debe importar en el archivo ```index.js``` que se encuentra dentro de ```imports/api/collections``` y se debe exportar.

```javascript
import Productos from './productos';

export default {
  Productos,
}
```

<hr/>

# Guía de contribución front-end

**Revisar puntos 1, 2, 3, 4 y 5 de la guía de contribución del back-end**
<hr/>

## 1. Cada vista del front-end se creará dentro de la ruta: 
```script
imports/ui/screens/
```
Se debe crear una nueva carpeta con el nombre de la vista. Ejemplo: Si se requiere crear la vista que contenga el inicio de sesión de la página, se debe crear una carpeta dentro de screens llamada "InicioSesion" en donde se guardará el archivo **.jsx** con el código.  Resultado final:

```script
imports/ui/screens/InicioSesion/InicioSesion.jsx
```

<hr/>

## 2. Toda función que no requiera cambiar un **estado** se deberá crear en un archivo *helper* con el nombre del componente del front-end. Ejemplo: 

```javascript
// dentro del componente InicioSesion tenemos una función que recorre un array y retorna un resultado

const testFunction = (arrayTest = []) => {
  return arrayTest.find(test => test.isRetornable);
}

const InicioSesion = () => {
  ...
}

export default InicioSesion;
```

Está función no se debería mezclar con el componente dado que: 
- Se podría reutilizar en otro componente
- La idea no es mezclar funciones de javascript con código jsx

Por ende entonces lo que se debe hacer es:

```javascript
// se crea el archivo helper llamado helperInicioSesion.js dentro de la misma ruta de InicioSesion.jsx

const testFunction = (arrayTest = []) => {
  return arrayTest.find(test => test.isRetornable);
}

// si hay varias funciones, se debe exportar con un export const

// si solo hay una, se debe utilizar export default
export default testFunction;
```

```javascript
// dentro de InicioSesion.jsx se importa el módulo creado y se llama donde se requiera

// si el import se hizo por defecto
import testFunction from './helperInicioSesion';

// si el import se hizo sin modo por defecto

import { testFunction } from './helperInicioSesion';

// se llama donde se requiera en el front-end
testFunction([]);
```

<hr/>

## 3. Los **Meteor.call** se deberán realizar en el archivo helper creado y deben retornar una promesa que el front-end debe resolver. Ejemplo:

```javascript
// dentro del archivo helper creado:

// para este ejemplo, suponemos que tenemos un método creado llamado "obtenerResultados"

import { Meteor } from 'meteor/meteor'

/**
 *
 * @typedef RetornoTest
 * @property {Number} a esto es una prueba
 * @property {String} b
 */

/**
 * @returns {Promise<RetornoTest>}
*/
const obtenerResultados = () => new Promise((resolve, reject) => {
  Meteor.call('obtenerResultados', (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

export default obtenerResultados;
```
```javascript
// dentro del archivo jsx

// se importa el helper creado
import obtenerResultados from './helper';

// se realiza el manejo de la promesa con los resultados. 

// Se puede realizar de las siguientes maneras: 

// Manejo de try catch
const testFunction = async () => {
  try {
  const resultados = await obtenerResultados();

  console.log(resultados)
  } catch (error) {
    console.error(error)
  }
}

// Manejo de then y catch. Precaución: NO recomendado en caso de tener que esperar más de dos resultados dentro de un then, dado que puede provocar un callback hell.
const testFunction = () => {
  obtenerResultados()
  .then(resultado => console.log)
  .catch(console.error)
}
```
