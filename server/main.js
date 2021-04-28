import '../imports/startup';

import { Meteor } from 'meteor/meteor';
import crearElementoGuardado from '../imports/api/elementosGuardados/crearElementoGuardado';

Meteor.startup(() => {
  crearElementoGuardado({ producto: { enlaceProducto: 'http://blabla' }, usuarioId: 1 });
});
