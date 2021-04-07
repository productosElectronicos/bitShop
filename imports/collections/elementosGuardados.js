import { Mongo } from 'meteor/mongo';

// Creamos la colección de productos guardados
const ElementosGuardados = new Mongo.Collection('elementosGuardados');

ElementosGuardados.indexes = [
  { index: { usuarioId: 1 } },
  { index: { url: 'url' } },
];

export default ElementosGuardados;
