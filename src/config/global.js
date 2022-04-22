export default {
  global: {
    componenteFormativo:
      'Movimiento y verificación de mercancías y objetos postales',
    descripcionCurso:
      'El transporte, parte esencial de la logística, permite el traslado de mercancías de un lugar a otro garantizando su protección y seguridad, su eficiencia depende en gran medida de las operaciones de manipulación y almacenamiento, así como su fácil identificación, permitiendo que la mercancía llegue a su destino en el momento acordado, en óptimas condiciones y al mínimo costo posible.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Transporte de mercancía y objetos postales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Embalajes para el transporte',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Equipos y herramientas de cargue y descargue',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Equipos y elementos de consolidación de mercancía ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de cohesión de las mercancías y objetos postales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipos de armados de pedidos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Alistamiento de mercancía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Picking (recogida)',
            hash: 't_7_1',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Procedimientos y protocolos de recibo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Precintos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Pesaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Terminales de dosificación y formulación',
            hash: 't_10_1',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Devoluciones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Normativa de producto',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arenal, L., C. (2019). Manipulación y movimientos con transpaletas y carretillas de mano. Tutor Formación.',
    },
    {
      referencia:
        'Campo, V., A., Hervás, E., A., y Revilla, R., M. (2013 ). Operaciones de almacenaje. McGraw Hill.',
    },
    {
      referencia:
        'Campo, V., A., Hervás, E., A., y Revilla, R., M. (2013). Técnicas de almacén. McGraw Hill.',
    },
    {
      referencia:
        'Correa, E., A., y Gómez, M., R. (2009). Tecnologías de la información y comunicación en la gestión de almacenes. Estudios Gerenciales, 26(117), 147-171.',
      link: 'http://www.scielo.org.co/pdf/eg/v26n117/v26n117a09.pdf',
    },
    {
      referencia:
        'Gómez, A., Iglesias, M., De la Fuente, D., y Menéndez , M. (2008). Estado del arte en políticas de ubicación de productos en almacén.',
      link:
        'http://adingor.es/congresos/web/uploads/cio/cio2008/LOGISTIC//1095-1102.pdf',
    },
    {
      referencia:
        'González, C., N. (2016). Transporte y logística. Revista Transporte y Territorio, 14, 1-4.',
      link: 'https://www.redalyc.org/pdf/3330/333046307001.pdf',
    },
    {
      referencia:
        'Mauleón, T., M. (2014). Transporte, operadores, redes. Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Mendoza, R., C., y Paternina, A., C. (2016). Manual práctico para la gestión logística: envase y embalaje, transporte y cadena de frío, preservación de productos del agro. Universidad del Norte.',
    },
    {
      referencia:
        'Mira, J., D. (2015). Manual de transporte de mercancías. Marge Books.',
    },
    {
      referencia:
        'Torres, R., Á. (2013). Preparación de pedidos. IC Editorial.',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'utilización óptima de un espacio asignado para poner una determinada cantidad de elementos o referencias',
    },
    {
      termino: 'Contenedor',
      significado:
        'caja reutilizable, de varios tamaños normalizados, para transportar la carga en cantidades, por vía terrestre, acuática o aérea, generalmente sin necesidad de traspasar producto en cada cambio de medio de transporte.',
    },
    {
      termino: 'Embalaje',
      significado:
        'procedimiento consistente en preservar, de manera cuidadosa y en un recipiente seguro, todos aquellos objetos que van a ser transportados ',
    },
    {
      termino: 'Envase',
      significado:
        'material que acompaña al producto y es necesario para contenerlo hasta o durante su utilización (Mauleón, 2014).',
    },
    {
      termino: 'Logística',
      significado:
        'proceso de planificar, ejecutar y controlar de una manera efectiva y eficiente el flujo de materias primas, inventario en curso y producto terminado, así como la información relativa a estos, desde el punto de origen hasta el punto de consumo',
    },
    {
      termino: 'Pallet',
      significado:
        'plataforma o bandeja de carga generalmente de madera sobre la que se adecúan los artículos.',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'objeto de transporte, de manera que puedan ser manipuladas por medios mecánicos.',
    },
  ],
  complementario: [
    {
      texto:
        'González, C., N. (2016). Transporte y logística. Revista Transporte y Territorio, 14, 1-4. ',
      tipo: 'Artículos',
      descarga: '/downloads/333046307001.pdf',
    },
    {
      texto:
        'Mendoza, R., C., y Paternina, A., C. (2016). Manual práctico para la gestión logística: envase y embalaje, transporte y cadena de frío, preservación de productos del agro. Universidad del Norte. ',
      tipo: 'Manual',
      descarga: '/downloads/9789587416473.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
