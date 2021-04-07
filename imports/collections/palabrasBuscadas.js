import { Mongo } from 'meteor/mongo';

// creamos colección de productos
const PalabrasBuscadas = new Mongo.Collection('palabrasBuscadas');

PalabrasBuscadas.indexes = [
  { index: { usuarioId: 1 } },
  { index: { fechaBusqueda: -1 } },
];

export default PalabrasBuscadas;
