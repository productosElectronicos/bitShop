import { Mongo } from 'meteor/mongo';

// creamos colección de productos
const Test = new Mongo.Collection('test');

Test.indexes = [];

export default Test;
