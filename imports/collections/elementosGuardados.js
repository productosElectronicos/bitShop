import { Mongo } from 'meteor/mongo';

// Creamos la colección de productos guardados
const ElementosGuardados = new Mongo.Collection('elementosGuardados');

ElementosGuardados.indexes = [
  { index: { usuarioId: 1 } },
  { index: { fechaGuardado: 1 } },
  //  { index: { productoId: 1 } },   cada elemento guardado debe incluir productoId
  //  { index: { enlaceProducto: 1 } }, cada elemento guardado debe incluir enlaceProducto (url)
];

export default ElementosGuardados;
