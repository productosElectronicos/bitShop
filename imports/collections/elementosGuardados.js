import { Mongo } from 'meteor/mongo';

// Creamos la colección de productos guardados
const ElementosGuardados = new Mongo.Collection('elementosGuardados');

ElementosGuardados.indexes = [
  { index: { usuarioId: 1 } },
  { index: { productoId: 1 } },
];

export default ElementosGuardados;
