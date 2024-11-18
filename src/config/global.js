export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de la ingeniería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El ciclo de la ingeniería ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Fundamentos de la ingeniería: un pilar para la innovación ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Concepto de ingeniería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Principales disciplinas de la ingeniería en la Industria 4.0',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La era digital y la industria 4.0',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Biologia desarrollo humano_U1.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ruíz Ayala, D., Saavedra Prieto, J., & Ramírez López, L. J. (2021, septiembre 7). Rol de la mujer en la ingeniería: Caso UMNG. Ponencia presentada en el Encuentro Internacional de Educación en Ingeniería ACOFI 2021.',
      link: 'https://doi.org/10.26507/ponencia.1720',
    },
    {
      referencia:
        'Structuralia. (2022, agosto 2). Barómetro 2022: Informe de la formación en el sector de la ingeniería. Lifelong Learning Service.',
      link: 'https://blog.structuralia.com/barometro-2022-para-empresas-pharos',
    },
    {
      referencia:
        'Structuralia Blog. (2023, junio 22). 23 de junio, Día Internacional de la Mujer en la Ingeniería. Ingeniería Civil y Transporte.',
      link:
        'https://blog.structuralia.com/dia-internacional-de-la-mujer-en-la-ingenieria',
    },
    {
      referencia:
        'Structuralia Blog. (2023, noviembre 20). Las aplicaciones de la ingeniería genética moldean el futuro. Transformación Digital e Ingeniería 4.0.',
      link: 'https://blog.structuralia.com/aplicaciones-ingenieria-genetica',
    },
    {
      referencia:
        'Vivas López, [Iniciales del nombre], Carrillo, [Iniciales del nombre], & Ruíz Ayala, D. (2021). Resumen de los mejores papers en principios fundamentales de la educación en ingeniería.',
      link: 'https://elicit.com/notebook/0b73ea61-803c-4155-aafe-a9685cf6310a',
    },
  ],
  glosario: [
    {
      termino: 'Conocimiento',
      significado:
        'Información adquirida a través del estudio y la experiencia',
    },
    {
      termino: 'Creatividad',
      significado: 'Capacidad de generar ideas nuevas y originales',
    },
    {
      termino: 'Desarrollo',
      significado: 'Proceso de crecimiento y evolución',
    },
    {
      termino: 'Diseño',
      significado:
        'Proceso de concepción y desarrollo de un producto o sistema',
    },
    {
      termino: 'Diseño de sistema',
      significado:
        'Proceso de creación de sistemas complejos que cumplen una función específica',
    },
    {
      termino: 'Ingeniería',
      significado:
        'Disciplina que aplica conocimientos científicos y tecnológicos para resolver problemas y diseñar soluciones',
    },
    {
      termino: 'Innovación',
      significado: 'Introducción de nuevos productos, procesos o ideas',
    },
    {
      termino: 'Metodología de la ingeniería',
      significado: 'Conjunto de métodos y técnicas utilizadas en la ingeniería',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'Capacidad de analizar información y evaluar argumentos de manera objetiva',
    },
    {
      termino: 'Principios de la ingeniería',
      significado:
        'Conceptos fundamentales que guían la práctica de la ingeniería',
    },
    {
      termino: 'Problema',
      significado: 'Situación que requiere una solución',
    },
    {
      termino: 'Resolución de problemas',
      significado: 'Proceso de identificar, analizar y resolver problemas',
    },
    {
      termino: 'Solución',
      significado: 'Respuesta o resultado que resuelve un problema o necesidad',
    },
    {
      termino: 'Tecnología',
      significado:
        'Conjunto de herramientas y técnicas utilizadas para resolver problemas',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
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
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
