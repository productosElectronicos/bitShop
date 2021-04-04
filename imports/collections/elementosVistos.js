import { Mongo } from 'meteor/mongo';

// creamos colección de productos
const ElementosVistos = new Mongo.Collection('elementosVistos');

ElementosVistos.indexes = [
  { index: { usuarioId: 1 } },
  { index: { fechaVisualizacion: -1 } },
];

export default ElementosVistos;
