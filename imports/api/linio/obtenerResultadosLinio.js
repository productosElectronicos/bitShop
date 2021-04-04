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
const obtenerResultadosLinio = (limit) => {
  const resultados = [
    {
      nombreProducto: 'Portatil Acer Nitro 5 15.6 pulgadas Intel Core i5 8GB 512GB',
      precioProducto: 3539900,
      descripcionProducto: 'Disco duro HDD=No aplica Duración aproximada de la batería=7 hrs Marca=Acer Hecho en=China Modelo tarjeta de video=Nvidia Geforce Gtx 1650 4Gb Ddr5 Generación del procesador=9°',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/b6bf7abfcff85d9ffc22be0458538025-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/porta-til-acer-nitro-5-156-pulgadas-intel-core-i5-8gb-512gb-tr47c0?qid=245a95ba26dfcc1ef88c4e49f87ab62a&oid=AC002EL0I2L23LCO&position=1&sku=AC002EL0I2L23LCO',
    },
    {
      nombreProducto: 'Portatil Lenovo Ideapad 3 Pentium Gold 4gb 128gb Ssd Hd W10 Mrclick',
      precioProducto: 1019990,
      descripcionProducto: 'Especificaciones técnicas: Producto nuevo de fábrica con doble control, dentro del proceso regular tuvo que ser re controlado y vuelto a pasar por los estándares de revisión hasta ser aprobado.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/dcb70a3b47595edea0d704ef7adcf614-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/portatil-lenovo-ideapad-3-pentium-gold-4gb-128gb-ssd-hd-w10-mrclick-rz8d87?qid=58cc65e0480d44f685285ceb61f278a5&oid=LE024EL0T5GNELCO&position=1&sku=LE024EL0T5GNELCO',
    },
    {
      nombreProducto: 'Portatil Lenovo Idea Pad S145 14IIL Core I5 8GB 256SSD Windows 10 Negro',
      precioProducto: 2599900,
      descripcionProducto: 'idea pad S145-14IIL 81W6 Product: ideapad S145-14IIL Processor: Intel Core i5-1035G4 (4C / 8T, 1.1 / 3.7GHz, 6MB) Graphics: Integrated Intel Iris Plus Graphics',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/78f027d9a9d0a80758f78cefcc801688-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/portatil-lenovo-idea-pad-s145-14iil-core-i5-8gb-256ssd-windows-10-negro-yq4u7t?qid=f3243e5fdcb55463b5cb218ca8d6b5c7&oid=LE024EL0034AALCO&position=1&sku=LE024EL0034AALCO',
    },
    {
      nombreProducto: 'Google Home mini Bocina inteligente con reconocimiento de voz - Gris',
      precioProducto: 138501,
      descripcionProducto: 'Google Home mini es la hermana de Google Home, bocina inteligente impulsada por comandos de voz, que fabrica Google. Ahora también es la primera que realmente compite con Amazon Echo dot.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/26f9a4cc1300dd0ecbabc094f8849712-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/google-home-mini-bocina-inteligente-con-reconocimiento-de-voz-gris-v9vpwh?sku=GO864EL0H7Z4MLCO&s=&ad_id=v2_ozDldY-X_bb0ipn1uO0b_G4NBIYeKaMta02a3IP3mWoZQpV3i6GOHuKCXMRubbeOZSX5ffA9deulb-6vDDKjEbMuaRrNlClomQdamh2QfOa6ltFmfLOIBmcOlRbPrU9b&widget=search_page_w1',
    },
    {
      nombreProducto: 'Xiaomi Mi Band 5 + Airdots S versión global 100% original',
      precioProducto: 260900,
      descripcionProducto: 'PRECIO INCREÍBLE 100% Original Mi Band 5 Cuenta con un Sensor de 6 ejes de alta precisión y sensor de frecuencia cardíaca PPGBatería de 14 días de duración extra prolongada con cargador magnético',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/e9e35c7bdcc61e90e82653389c86e1d8-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/xiaomi-mi-band-5-airdots-s-versio-n-global-100-original-qbq6iu?sku=XI310EL0YQ6SRLCO&s=&ad_id=v2_fcJAAwNqO72btBtWJign9nH51JP4_X2njOS4hhQsqqrgIqadJsgw8TjSPAu24DOwkLLE6tTf2jfPYJ-R42k2pzi3gh6AuFuXnGwFwTkqSDZWHxnaPvQ06aQhfRMvwvYY&widget=search_page_w1',
    },
    {
      nombreProducto: 'Xiaomi Band 4 Original 2019 Pulsera Inteligente Fitness Tracker',
      precioProducto: 95900,
      descripcionProducto: 'Especificaciones técnicas: Producto nuevo de fábrica con doble control, dentro del proceso regular tuvo que ser re controlado y vuelto a pasar por los estándares de revisión hasta ser aprobado.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/c697b2685d84361149d1204590ace4c7-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/xiaomi-band-4-original-2019-pulsera-inteligente-fitness-tracker-s1u3nt?qid=96995d0a64d1beb494f1d2af651c4012&oid=XI310EL0PSUESLCO&position=2&sku=XI310EL0PSUESLCO',
    },
    {
      nombreProducto: 'Smartphone Apple Iphone 11 128Gb - Negro',
      precioProducto: 2898000,
      descripcionProducto: 'El iPhone 11 cuenta con un diseño extraordinario, un balance entre lo elegante y moderno. Es un smartphone íntegro que se destaca por tener un procesador Chip A13 Bionic y 128 GB de almacenamiento interno que permite almacenar fotografías vídeos y aplicaciones con mayor capacidad, posee una memoria RAM de 4 GB que garantiza un increíble rendimiento y la funcionalidad para realizar múltiples tareas sin esfuerzo.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/8b589dc3475d7a9ea3bc15001cbcc908-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/smartphone-apple-iphone-11-128gb-negro-ooyw3b?qid=676338dd789107231065ec2811ce12dd&oid=AP039EL13UPISLCO&position=1&sku=AP039EL13UPISLCO',
    },
    {
      nombreProducto: 'Celular Xiaomi Redmi Note 8 Pro 128Gb 6Gb Ram Verde',
      precioProducto: 839900,
      descripcionProducto: 'El Redmi Note 8 Pro destaca por su diseño elegante y viene equipado con Corning Gorilla Glass 5, tanto en su parte delantera como trasera, que protege el dispositivo de caídas accidentales, así como del desgaste general. Además, el dispositivo también aprovecha la tecnología a prueba de salpicaduras IP52, que ofrece una efectiva protección. El nuevo teléfono inteligente dispone de una pantalla de 6,53 pulgadas FHD+ con notch con forma de gota de agua, una curvatura 3D de su marco y un sensor de huellas trasero. Además, la compañía ha confirmado que cuenta con una relación de pantalla-cuerpo del 91.4%.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/2c5f1e030bfbb121300342c4eb683f81-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/celular-xiaomi-redmi-note-8-pro-128gb-6gb-ram-verde-ym5qbc?qid=733f48653ec139010559c3c8daf936a8&oid=XI310EL04210ILCO&position=1&sku=XI310EL04210ILCO',
    },
    {
      nombreProducto: 'Resident Evil 4 - PlayStation 4',
      precioProducto: 199990,
      descripcionProducto: 'Resident Evil 4 - PlayStation 4 Fecha de estreno inicial: 11 de enero de 2005Modo: Videojuego de un jugadorPlataforma: PlayStation 4Diseñadores: Kouji Kakae, Shigenori Nishikawa, Hiroshi ShibataDesarrolladores: Capcom, Capcom Production Studio 4',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/c2e48228e7e7794c501738ea5c6122ad-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/resident-evil-4-playstation-4-va5kv7?qid=9e94652136bbc42e77c8c0992ca81ac7&oid=71X2F335H362013388560318&position=2&sku=CA259ME0H1MDWLCO',
    },
    {
      nombreProducto: 'Juego Death Stranding PS4 Nuevo Fisico',
      precioProducto: 129900,
      descripcionProducto: 'Death Stranding es un videojuego de acción en un mundo abierto desarrollado por Kojima Productions y publicado por Sony Interactive Entertainment para PlayStation 4. Su director es Hideo Kojima y será el primer juego de su compañía luego de que en 2015 finalizara el contrato con Konami.',
      localizacion: 'Bogotá',
      fotoProducto: 'https://i.linio.com/p/0828f9d68bb46b972b33f89339ceaddb-product.webp',
      esUsado: false,
      tienda: 'Linio',
      enlaceProducto: 'https://www.linio.com.co/p/juego-death-stranding-ps4-nuevo-fisico-ons03z?qid=f7ceccecc80ce5d511889eed254f3817&oid=SO861ME151SG4LCO&position=1&sku=SO861ME151SG4LCO',
    },
  ];

  if (limit) {
    return _.sampleSize(resultados, limit);
  }
  return resultados;
};

export default obtenerResultadosLinio;
