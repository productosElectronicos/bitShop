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
 *
 * @returns {Resultado[]}
 */
const obtenerResultadosFalabella = () => {
  const resultados = [
    {
      nombreProducto: 'Celular Xiaomi Redmi Note 8 128GB',
      precioProducto: 689900,
      descripcionProducto: 'Garantía del proveedor 1 año. Información Adicional La memoria interna y la RAM disponibles para el usuario dependen del sistema operativo y las aplicaciones precargadas.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/4919209_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/prod9600012/Celular-Xiaomi-Redmi-Note-8-128GB/4919209',
    },
    {
      nombreProducto: 'Tablet Lenovo Yoga Smart Wifi ZA3V0007CO 10.1 pulgadas',
      precioProducto: 797900,
      descripcionProducto: 'Todas las afirmaciones sobre la duración de la batería son aproximadas y se basan en resultados de pruebas en las que se ha empleado la prueba comparativa de duración de la batería MobileMark® 2014 versión 1.5. Los resultados reales pueden variar y dependen de diversos factores, entre ellos la configuración y el uso del producto, el software, las condiciones de funcionamiento, la funcionalidad inalámbrica y la administración de energía.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/4967031_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/4967031/Tablet-Lenovo-Yoga-Smart-Wifi-ZA3V0007CO-10.1-pulgadas/4967031',
    },
    {
      nombreProducto: 'Impresoras multifuncionales HP 5SD78A',
      precioProducto: 399900,
      descripcionProducto: 'Hardware: Hasta 1200 x 1200 ppp. Óptica: Hasta 1200 ppp. Producto ambientado, solo incluye productos especificados en la descripción. Para cambios o devoluciones te invitamos a leer nuestras políticas',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/9139182_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'falabella.com.co/falabella-co/product/9139182/Impresoras-multifuncionales-HP-5SD78A/9139182',
    },
    {
      nombreProducto: 'All in One HP 20 pulgadas Intel Celeron 4GB 500GB',
      precioProducto: 1459000,
      descripcionProducto: 'EL HP All-in-One es un computador que combina el diseño ergonómico, funcionalidad y poder. Dándote seguridad y confianza para que todos en tu familia la utilicen sin ninguna preocupación. Incluye todo lo que necesitas sin gastar de más.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/9990414_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/9990414/All-in-One-HP-20-pulgadas-Intel-Celeron-4GB-500GB/9990414',
    },
    {
      nombreProducto: 'Portátil Acer Nitro 5 15.6 pulgadas Intel Core i5 8GB 512GB',
      precioProducto: 3539900,
      descripcionProducto: 'Incluye cargador y manual de uso. Información Adicional La memoria interna y la RAM disponibles para el usuario dependen del sistema operativo y las aplicaciones precargadas.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/9351676_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/9351676/Portatil-Acer-Nitro-5-15.6-pulgadas-Intel-Core-i5-8GB-512GB/9351676',
    },
    {
      nombreProducto: 'Portátil Lenovo Notebook 14 pulgadas Intel Core i5 8GB 256GB',
      precioProducto: 4299900,
      descripcionProducto: '1 año. Información Adicional La memoria interna y la RAM disponibles para el usuario dependen del sistema operativo y las aplicaciones precargadas.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/9464226_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/9464226/Portatil-Lenovo-Notebook-14-pulgadas-Intel-Core-i5-8GB-256GB/9464226',
    },
    {
      nombreProducto: 'PC Gamer Acer Nitro 5 15.6 pulgadas Intel Core i5 8GB 1TB 256GB',
      precioProducto: 3999000,
      descripcionProducto: 'Incluye cargador y manual de uso. Información Adicional La memoria interna y la RAM disponibles para el usuario dependen del sistema operativo y las aplicaciones precargadas.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/8833949_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/8833949/PC-Gamer-Acer-Nitro-5-15.6-pulgadas-Intel-Core-i5-8GB-1TB-256GB/8833949',
    },
    {
      nombreProducto: 'Celular Nokia 3.4 64GB',
      precioProducto: 469900,
      descripcionProducto: 'La potencia se une al rendimiento Haz más en tu smartphone con la poderosa plataforma Qualcomm Snapdragon 460: hasta un 70% más de rendimiento en comparación con las generaciones anteriores.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/10532147_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/prod11130114/Celular-Nokia-3.4-64GB/10532147',
    },
    {
      nombreProducto: 'Consola Nintendo Switch Lite 32GB',
      precioProducto: 1199900,
      descripcionProducto: 'Les presentamos la consola Nintendo Switch Lite, una nueva versión de la consola Nintendo Switch que está optimizada para el juego personal y portátil. La consola Nintendo Switch Lite es una consola Nintendo Switch pequeña y ligera a un gran precio. Con una cruz de control incorporada y un elegante diseño, esta consola es perfecta para jugar en el camino. La consola Nintendo Switch Lite es compatible con populares juegos como: Super Mario Odyssey, Mario Kart 8 Deluxe, Super Smash Bros. Ultimate, The Legend of Zelda: Breath of the Wild y más. Si estás buscando una consola de juegos que sea solo para ti, la consola Nintendo Switch Lite está lista para salir contigo a todas partes.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/4193208_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/prod9350004/Consola-Nintendo-Switch-Lite-32GB/4193208',
    },
    {
      nombreProducto: 'iPhone XR 64GB',
      precioProducto: 2179900,
      descripcionProducto: 'Como parte de los esfuerzos de Apple por reducir el impacto ambiental, el iPhone XR no incluye adaptador de corriente ni EarPods. Puedes usar el adaptador de corriente de Apple y los audi¿fonos que ya tengas o comprarlos por separado.',
      localizacion: 'N/A',
      fotoProducto: 'https://falabella.scene7.com/is/image/FalabellaCO/9722708_1?wid=1500&hei=1500&qlt=70',
      esUsado: false,
      tienda: 'Falabella',
      enlaceProducto: 'https://www.falabella.com.co/falabella-co/product/prod10900024/iPhone-XR-64GB/9722708',
    },
  ];
  return resultados;
};

export default obtenerResultadosFalabella;
