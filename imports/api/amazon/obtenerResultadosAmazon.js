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
const obtenerResultadosAmazon = (limit) => {
  const resultados = [
    {
      nombreProducto: 'Nuevo Echo Dot (4.ª generación) versión internacional | Altavoz inteligente con Alexa | Negro',
      precioProducto: 185600,
      descripcionProducto: 'Te presentamos el Echo Dot — Echo Dot (4.ª generación) se conecta a Alexa, un servicio de voz basado en la nube, para reproducir música, establecer temporizadores y alarmas, controlar dispositivos domésticos inteligentes compatibles y más.',
      localizacion: 'Amazon.com Services LLC',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/61LmQ1HWiyL._AC_SL1000_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/generaci%C3%B3n-versi%C3%B3n-internacional-Altavoz-inteligente/dp/B086FVNKYX/ref=sr_1_1?currency=COP&dchild=1&keywords=alexa&qid=1617802050&s=amazon-devices&sr=1-1',
    },
    {
      nombreProducto: 'Acer Aspire 5 Computadora portátil delgada, pantalla IPS Full HD de 15.6 pulgadas, AMD Ryzen 3 3200U, gráficos Vega 3, 4GB DDR4, 128GB SSD, teclado retroiluminado, Windows 10 en modo S, A515-43-R19L, plateado',
      precioProducto: 1335118,
      descripcionProducto: 'Acer Aspire 5 Computadora portátil delgada, pantalla IPS Full HD de 15.6 pulgadas, AMD Ryzen 3 3200U, gráficos Vega 3, 4GB DDR4, 128GB SSD, teclado retroiluminado, Windows 10 en modo S, A515-43-R19L, plateado',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/Computadora-port%C3%A1til-pantalla-retroiluminado-A515-43-R19L/dp/B07RF1XD36/ref=lp_16225007011_1_2',
    },
    {
      nombreProducto: 'HP Monitor FHD de 24 mh - Monitor de computadora con pantalla IPS de 23,8 pulgadas (1080p) - Altavoces incorporados y montaje VESA - Ajuste de altura / inclinación para visualización ergonómica - HDMI y DisplayPort - (1D0J9AA # ABA)',
      precioProducto: 631131,
      descripcionProducto: 'HP Monitor FHD de 24 mh - Monitor de computadora con pantalla IPS de 23,8 pulgadas (1080p) - Altavoces incorporados y montaje VESA - Ajuste de altura / inclinación para visualización ergonómica - HDMI y DisplayPort - (1D0J9AA # ABA)',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/Monitor-FHD-computadora-incorporados-visualizaci%C3%B3n/dp/B08BF4CZSV/ref=lp_16225007011_1_4',
    },
    {
      nombreProducto: 'Acer SB220Q bi 21.5 pulgadas, monitor ultradelgado y sin marco, alta definición (1920 x 1080) IPS (HDMI y puerto VGA)',
      precioProducto: 371238,
      descripcionProducto: 'Acer SB220Q bi 21.5 pulgadas, monitor ultradelgado y sin marco, alta definición (1920 x 1080) IPS (HDMI y puerto VGA)',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/SB220Q-21-5-pulgadas-monitor-ultradelgado-definici%C3%B3n/dp/B07CVL2D2S/ref=lp_16225007011_1_10',
    },
    {
      nombreProducto: 'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode with One Year of Microsoft 365 Personal, L210MA-DB01',
      precioProducto: 838674,
      descripcionProducto: 'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode with One Year of Microsoft 365 Personal, L210MA-DB01',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/810BY5U9baL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/L210MA-DB01/dp/B081V6W99V/ref=sr_1_30?dchild=1&qid=1617802662&s=computers-intl-ship&sr=1-30',
    },
    {
      nombreProducto: 'Acer Nitro 5 - Portátil de Gaming, Intel Core i5-9300H, 9ª generación, NVIDIA GeForce GTX 1650, pantalla IPS Full HD de 15.6 pulgadas, RAM 8 GB DDR4, unidad de estado sólido (SSD) 256 GB NVMe, WiFi 6, Waves MaxxAudio, teclado retroiluminado, AN515-54-5812',
      precioProducto: 2628927,
      descripcionProducto: 'Acer Nitro 5 - Portátil de Gaming, Intel Core i5-9300H, 9ª generación, NVIDIA GeForce GTX 1650, pantalla IPS Full HD de 15.6 pulgadas, RAM 8 GB DDR4, unidad de estado sólido (SSD) 256 GB NVMe, WiFi 6, Waves MaxxAudio, teclado retroiluminado, AN515-54-5812',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/Acer-Nitro-generaci%C3%B3n-retroiluminado-AN515-54-5812/dp/B08H2H89K1/ref=sr_1_42?dchild=1&qid=1617802749&s=computers-intl-ship&sr=1-42',
    },
    {
      nombreProducto: 'Cámara web 1080P, cámara web HD con micrófono y cubierta de privacidad, 2021 NexiGo N60 USB Cámara de ordenador, 110 grados de gran angular, Plug and Play, para zoom/Skype/Teams/OBS, conferencias y videollamadas',
      precioProducto: 126197,
      descripcionProducto: 'Cámara web 1080P, cámara web HD con micrófono y cubierta de privacidad, 2021 NexiGo N60 USB Cámara de ordenador, 110 grados de gran angular, Plug and Play, para zoom/Skype/Teams/OBS, conferencias y videollamadas',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/61su-fwFdRL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/micr%C3%B3fono-privacidad-N60-conferencias-videollamadas/dp/B088TSR6YJ/ref=sr_1_53?dchild=1&qid=1617802844&s=computers-intl-ship&sr=1-53',
    },
    {
      nombreProducto: 'Lenovo Legion 5 Gaming Laptop, pantalla IPS FHD (1920 x 1080), procesador AMD Ryzen 7 4800H, 16 GB DDR4, 512 GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black',
      precioProducto: 3532723,
      descripcionProducto: 'Lenovo Legion 5 Gaming Laptop, pantalla IPS FHD (1920 x 1080), procesador AMD Ryzen 7 4800H, 16 GB DDR4, 512 GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/pantalla-procesador-Windows-82B1000AUS-Phantom/dp/B08BB9RWXD/ref=sr_1_60?dchild=1&qid=1617803840&s=computers-intl-ship&sr=1-60',
    },
    {
      nombreProducto: 'HP Impresora multifunción inalámbrica ENVY 6055, impresión móvil, escaneo y copia, funciona con Alexa (5SE16A)',
      precioProducto: 296983,
      descripcionProducto: 'HP Impresora multifunción inalámbrica ENVY 6055, impresión móvil, escaneo y copia, funciona con Alexa (5SE16A)',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/71JC-HTuqcL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/Impresora-multifunci%C3%B3n-inal%C3%A1mbrica-impresi%C3%B3n-5SE16A/dp/B083ZZ96PT/ref=sr_1_26?dchild=1&qid=1617804127&s=computers-intl-ship&sr=1-26',
    },
    {
      nombreProducto: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps videollamadas, audio estéreo claro, corrección de luz HD, funciona con Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Negro',
      precioProducto: 315213,
      descripcionProducto: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps videollamadas, audio estéreo claro, corrección de luz HD, funciona con Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Negro',
      localizacion: 'Amazon.com',
      fotoProducto: 'https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg',
      esUsado: false,
      tienda: 'Amazon',
      enlaceProducto: 'https://www.amazon.com/-/es/Logitech-videollamadas-correcci%C3%B3n-funciona-FaceTime/dp/B085TFF7M1/ref=sr_1_29?dchild=1&qid=1617804249&s=computers-intl-ship&sr=1-29',
    },
  ];

  if (limit) {
    return _.sampleSize(resultados, limit);
  }
  return resultados;
};

export default obtenerResultadosAmazon;
