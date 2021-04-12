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
const obtenerResultadosOlx = (limit) => {
  const resultados = [
    {
      nombreProducto: 'PLAYSTATION S4 PRO 1TB 10/10',
      precioProducto: 1250000,
      descripcionProducto: 'Entrego con 1 control, cable hdmi, caja original 1 juego físico 2 digitales y obsequio base de pared',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/e1077nblgy3m3-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/playstation-s4-pro-1tb-1010-iid-1109755556',
    },
    {
      nombreProducto: 'Vendo play4 1 tera 4 juegos y un control',
      precioProducto: 1200000,
      descripcionProducto: 'Ps4 de 1 teraIncluye 4 juegos y un control original',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/7pcogl0kruu81-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/vendo-play4-1-tera-4-juegos-y-un-control-iid-1109748452',
    },
    {
      nombreProducto: 'Logitech G29',
      precioProducto: 900000,
      descripcionProducto: 'volante y pedales usados solo en cuarentena perfecto estado en caja',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/64zr56t97m6y2-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/logitech-g29-iid-1108944070',
    },
    {
      nombreProducto: 'PlayStation 4 slim 1tb',
      precioProducto: 1100000,
      descripcionProducto: 'Se vende PlayStation 4 Slim 1Tb en buen estado con todo lo que ves en la foto',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/3pidmighh7fx-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/playstation-4-slim-1tb-iid-1109514154',
    },
    {
      nombreProducto: 'Xbox arcade',
      precioProducto: 250000,
      descripcionProducto: 'Vendo Xbox fat o arcade con un control hinalambrico y otro remoto es negociable ya que no lo uso no tiene juegos pero si disco duro de 500 hace tiempo no lo huzo lo que no use vendalo',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/bz4jstuhbolg1-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/xbox-arcade-iid-1109828775',
    },
    {
      nombreProducto: 'Vendo xbox clasica',
      precioProducto: 120000,
      descripcionProducto: 'Xbox +1 control',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/yuvjoot78nc2-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/vendo-xbox-clasica-iid-1109828712',
    },
    {
      nombreProducto: 'Xbox 360 Superslim 500gb Usada',
      precioProducto: 305000,
      descripcionProducto: 'Xbox 360 en perfectas condiciones, ningún arreglo, con todos los mantenimientos al día.Incluye:      Xbox 360 Superslim           1 control inalámbrico      Cable de poder      Cable HDMI      Memoria externa adicional de 250 GB      5 juegos:      -Airborne Medal of Honor      -FIFA 15      -FIFA 14      -Grand Theft Auto V      -Assassin’s Creed',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/jdu5zjbgvu6p1-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/xbox-360-superslim-500gb-usada-iid-1108199701',
    },
    {
      nombreProducto: 'XBOX, JUEGOS Y VR BOX',
      precioProducto: 550000,
      descripcionProducto: 'Juegos: 100+ EXCELENTE ESTADO      Control EXCELENTE ESTADO      Consola para repuestos      Fuente de poder EXCELENTE ESTADO      Cables EXCELENTE ESTADO      + OBSEQUIO Visor VR Box para realidad virtual      => 550.000 precio negociable',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/p08uhoppcy0t-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/xbox-juegos-y-vr-box-iid-1109828671',
    },
    {
      nombreProducto: 'Xbox 360 super slim con dos controles',
      precioProducto: 400000,
      descripcionProducto: 'Xbox 360 super slim con dos controles en excelente estado',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/v6hvmk1214l62-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/xbox-360-super-slim-con-dos-controles-iid-1109828634',
    },
    {
      nombreProducto: 'Venta play 3 con juegos en disco duro',
      precioProducto: 480000,
      descripcionProducto: 'Se vende play 3 en perfecto estado con juegos incluidos en disco duro',
      localizacion: 'olx.com.co',
      fotoProducto: 'https://apollo-virginia.akamaized.net/v1/files/pgsuyajsyeve2-CO/image;s=1080x1080',
      esUsado: true,
      tienda: 'Olx',
      enlaceProducto: 'https://www.olx.com.co/item/venta-play-3-con-juegos-en-disco-duro-iid-1109828585',
    },
  ];

  if (limit) {
    return _.sampleSize(resultados, limit);
  }
  return resultados;
};

export default obtenerResultadosOlx;
