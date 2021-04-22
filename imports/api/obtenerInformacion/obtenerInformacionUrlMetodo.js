import { Promise as MPromise } from 'meteor/promise';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import obtenerResultadosAmazon from './obtenerInformacionUrl';

const obtenerInformacionUrlMetodo = new ValidatedMethod({
    name = 'obtenerInformacionMetodo',
    validate: new SimpleSchema
 })