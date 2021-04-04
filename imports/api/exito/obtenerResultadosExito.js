import _ from 'lodash';

/**
 *
 * @typedef Resultado
 * @property {String} nombreProducto
 * @property {Number} precioProducto
 * @property {String} descripcionProducto
 * @property {String} localizacion
 * @property {String} fotoProducto
 * @property {Boolean} esUsado
 * @property {String} tienda
 * @property {String} enlaceProducto
 */

/**
 * @param {Number|undefined} limit limite de resultados
 * @returns {Resultado[]}
 */
const obtenerResultadosExito = (limit) => {
  const resultados = [
    {
      nombreProducto: 'Iphone 11 Negro 128Gb',
      precioProducto: 3099782,
      descripcionProducto: 'Como parte de los esfuerzos de Apple por reducir el impacto ambiental, el iPhone 11 no incluye adaptador de corriente ni EarPods. Puedes usar el adaptador de corriente de Apple y los audífonos que ya tengas o comprarlos por separado.',
      localizacion: 'virtual sales',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/4995802-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/iphone-11-negro-128gb-100978241-mp/p?idsku=100978241&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rQb1_hclpBTDvtMKAc5cXArg-80hffnfkoJ6hv3-3ippsTcr_fifZBoC0NgQAvD_BwE&gclsrc=aw.ds',
    },
    {
      nombreProducto: 'Celular Samsung Galaxy A31 128Gb Azul',
      precioProducto: 798700,
      descripcionProducto: 'El Samsung Galaxy A31 es el sucesor del Galaxy A30. Con una pantalla Super AMOLED Full HD+ de 6.4 pulgadas, el Galaxy A31 cuenta con un procesador octa-core a 2GHz acompañado de 4GB de memoria RAM con 128GB de almacenamiento. La cámara principal del Galaxy A31 es cuádruple, con lentes de 48 MP, 8 MP, 5 MP y 5 MP, mientras que la cámara selfie es de 20 megapixels. El Galaxy A31 completa sus características con una batería de 5000 mAh con carga rápida, lector de huellas bajo la pantalla, y corre One UI 2.0 sobre Android 10.',
      localizacion: 'electrojaponesa',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/4820370-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/celular-samsung-galaxy-a31-128gb-azul-100705912-mp/p?idsku=100705912&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rYkZVD2q_1P7CLGLhi1KHDAIx2sJMcMKM0YFKaq2B1BkP5jOp3xpgRoCch8QAvD_BwE&gclsrc=aw.ds',
    },
    {
      nombreProducto: 'Celular Samsung S21+ 256GB SM-G996BZKKLTC Black',
      precioProducto: 5149899,
      descripcionProducto: 'Contenido suministrado a Almacenes Éxito directamente por SAMSUNG ELECTRONICS COLOMBIA S.A.',
      localizacion: 'N/A',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/6990545-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/s21-256-gb-samsung-sm-g996bzkkltc-3009527/p',
    },
    {
      nombreProducto: 'Monitor Benq Gw2480 Ips 24In 1080P Bisel Ultra Delgado Speakers',
      precioProducto: 520999,
      descripcionProducto: 'Panel IPS Full HD 1080P de 24 pulgadas: 23. Pantalla panorámica Full HD IPS de 8 con resolución de 1920x1080, 250 nits de brillo, altavoces incorporados',
      localizacion: 'sym computadores',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/5185166-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/monitor-benq-gw2480-ips-24in-1080p-bisel-ultra-delgado-speakers-100710882-mp/p',
    },
    {
      nombreProducto: 'Monitor Janus Ips 24" Gamer 144Hz, Plano Resolución 1920 X 1080 Full Hd',
      precioProducto: 994000,
      descripcionProducto: 'MONITOR JANUS IPS 24 GAMER 144HZ Conectividad: 2 HDMI Pulgadas: 24” Tipo de panel: IPS Resolución: PLANO 1920 x 1080 FULL HD Tiempo De Respuesta: 1 Mili segundos Parlantes Incorporados Código: 24-8-39 IVA INCLUIDO.',
      localizacion: 'janus',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/4998712-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/monitor-janus-ips-24-gamer-144hz-plano-resolucion-1920-x-1080-full-hd-100977887-mp/p',
    },
    {
      nombreProducto: 'Tableta Digitalizadora Wacom Intous S',
      precioProducto: 315900,
      descripcionProducto: 'Tipo de producto: Tableta con lápiz sensible a la presión',
      localizacion: 'buyruru',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/258603-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/tableta-digitalizadora-wacom-intous-s-100032248-mp/p',
    },
    {
      nombreProducto: 'https://www.exito.com/tablet-samsung-galaxy-tab-a-8-0--2019-wi-fi--32gb---negro/p',
      precioProducto: 0,
      descripcionProducto: '',
      localizacion: '',
      fotoProducto: '',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: '',
    },
    {
      nombreProducto: 'Tablet Samsung Galaxy Tab A 8.0 (2019 Wi-Fi) 32GB - Negro',
      precioProducto: 449900,
      descripcionProducto: 'Una tablet que te acompaña donde vayas. Descubre la práctica compañía de la Galaxy Tab A (8", 2019), una tablet que supera lo básico y agrega mucho más. Con un diseño delgado, compacto, portátil y fácil de manejar con una sola mano, tiene una combinación ideal de rendimiento, diseño y accesibilidad.',
      localizacion: 'N/A',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/4526538-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/tablet-samsung-galaxy-tab-a-8-0--2019-wi-fi--32gb---negro/p',
    },
    {
      nombreProducto: 'Amazon Kindle 6Pulg 10Ma Gen 8Gb-Blanca',
      precioProducto: 359900,
      descripcionProducto: '¿Eres un amante de la lectura? este producto esta diseñado especialmente para ti; los Kindle son lectores de libros electrónicos que te brindan la mejor experiencia y comodidad, tanto así que es como si estuvieras leyendo directamente de una hoja de papel. ',
      localizacion: 'coltrade',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/5552014-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/amazon-kindle-6pulg-10ma-gen-8gbblanca-100978952-mp/p',
    },
    {
      nombreProducto: 'Ipad (8Th Gen) Wi-Fi 32Gb Oro',
      precioProducto: 1699900,
      descripcionProducto: 'El nuevo iPad se transforma en lo que quieras: un cuaderno digital, una oficina móvil, un estudio fotográfico, una consola de juegos o una sala de cine. El chip A12 Bionic te ofrece la potencia que necesitas para usar las apps de todos los días y los juegos más inmersivos. Puedes editar un documento mientras buscas información en Internet y hablas con un compañero por FaceTime. Gracias al Apple Pencil, tomar notas en el iPad es supersencillo. ¿Tienes que preparar un informe? Conecta el Smart Keyboard de tamaño completo y escribe con total comodidad.1 Las conexiones Wi-Fi, la batería para todo el día3, te mantendrán conectado donde vayas.',
      localizacion: 'tecnologia en linea',
      fotoProducto: 'https://exitocol.vtexassets.com/arquivos/ids/6151917-800-auto?width=800&height=auto&aspect=true',
      esUsado: false,
      tienda: 'Exito',
      enlaceProducto: 'https://www.exito.com/ipad-8th-gen-wifi-32gb-oro-100874593-mp/p',
    },
  ];

  if (limit) {
    return _.sampleSize(resultados, limit);
  }
  return resultados;
};

export default obtenerResultadosExito;
