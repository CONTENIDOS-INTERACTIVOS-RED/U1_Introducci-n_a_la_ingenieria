<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Fundamentos de la Ingeniería'" :subTitulo="'2. Concepto de ingeniería'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-24.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La ingeniería es mucho más que una simple profesión; es una forma de pensar y un motor de innovación. Es la aplicación creativa de los conocimientos científicos y matemáticos para dar forma al mundo que nos rodea. Los ingenieros son los arquitectos del futuro, los que transforman ideas en realidad y resuelven los desafíos más complejos de nuestra sociedad.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')  

    h2 El rol del ingeniero
    p Los ingenieros son solucionadores de problemas por naturaleza. Su trabajo consiste en:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="49.5%" y="17%" numero="+")
        .h5.mb-2 Construir y mejorar
        p Los ingenieros no solo diseñan, también construyen y ponen en marcha sus proyectos. Además, siempre están buscando formas de mejorar sus diseños y hacerlos más eficientes.
      .tarjeta.bg-white.p-4(x="34.5%" y="27%" numero="+")
        .h5.mb-2 Diseñar y crear
        p A partir de una idea, los ingenieros desarrollan planos detallados, crean modelos y prototipos, y supervisan la construcción de proyectos.
      .tarjeta.bg-white.p-4(x="27.5%" y="51%" numero="+")
        .h5.mb-2 Idear soluciones innovadoras
        p Al enfrentarse a un problema, los ingenieros no se conforman con la primera respuesta. Buscan soluciones creativas y eficientes que optimicen recursos y minimicen impactos negativos.
      .tarjeta.bg-white.p-4(x="72.5%" y="51%" numero="+")
        .h5.mb-2 Utilizar tecnología de vanguardia
        p Los ingenieros emplean las últimas herramientas y software para simular, analizar y optimizar sus diseños. Desde programas de diseño asistido por computadora (CAD) hasta inteligencia artificial, la tecnología es una aliada fundamental en su trabajo.

    h2 ¿Por qué la ingeniería es importante?
    p.mb-4 La ingeniería ha sido el motor de la civilización desde sus inicios. Gracias a los ingenieros, hemos pasado de vivir en cuevas a construir ciudades inteligentes, de comunicarnos por señales de humo a hacerlo instantáneamente a través de internet, y de viajar a caballo a explorar el espacio exterior. La ingeniería está detrás de cada aspecto de nuestra vida moderna:


    .row.position-relative.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Infraestructuras
              p.mb-0 Los ingenieros construyen las carreteras, puentes y edificios que utilizamos a diario, así como las redes de transporte y comunicación que conectan al mundo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Tecnología
              p.mb-0 Desde los teléfonos inteligentes hasta los satélites, los ingenieros desarrollan los dispositivos que utilizamos para trabajar, comunicarnos y entretenernos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Salud
              p.mb-0 Los ingenieros biomédicos crean prótesis, equipos médicos y sistemas de diagnóstico que salvan vidas.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Energía
              p.mb-0 Desarrollan tecnologías limpias y eficientes para generar y distribuir energía, contribuyendo a un futuro más sostenible.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Exploración espacial
              p.mb-0 Los ingenieros diseñan naves espaciales, robots y sistemas de soporte vital que nos permiten explorar el universo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    p.mb-4 Hoy en un mundo donde las máquinas aprenden solas, los robots colaboran con los humanos y los datos son el nuevo petróleo. Bienvenido a la Industria 4.0, una era de transformación digital que está redefiniendo la manera en que diseñamos, fabricamos y vivimos. Y tú, como estudiante de ingeniería, estás en el epicentro de esta revolución.
    .bg-fondo-2.bg-full-width.mb-5
      div.px-5.pb-md-3.py-4
        .row
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Qué es la industria 4.0?
                p.text-small.px-4.text-center.pb-2 La Industria 4.0, también conocida como la cuarta revolución industrial, es una fusión de tecnologías digitales y físicas que están cambiando radicalmente la forma en que producimos bienes y servicios. Piensa en fábricas inteligentes donde las máquinas se comunican entre sí, en productos personalizados a gran escala y en cadenas de suministro altamente eficientes.
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Cómo encaja la ingeniería en este panorama?
                p.text-small.px-4.text-center.pb-2 La ingeniería es la llave que abre las puertas de la Industria 4.0. Los ingenieros son los arquitectos de este nuevo mundo, los que diseñan las tecnologías, los procesos y los sistemas que hacen que todo funcione. Desde la inteligencia artificial hasta la robótica, pasando por la Internet de las Cosas, la ingeniería está presente en todos los aspectos de la Industria 4.0.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1 
        h2 Principales disciplinas de la ingeniería en la Industria 4.0
    p.mb-5 Las diversas ramas de la ingeniería aplican conocimientos especializados para desarrollar soluciones innovadoras en distintos campos. Desde el diseño de sistemas complejos y robots inteligentes hasta la optimización de procesos y el desarrollo de dispositivos electrónicos, cada especialidad contribuye de manera única al avance de la tecnología y la industria.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingeniería de Sistemas", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería de Sistemas
            p(data-aos="fade-up") Estos ingenieros diseñan y gestionan sistemas complejos, como redes de producción y logística, integrando tecnologías como la inteligencia artificial y el big data.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingeniería Mecatrónica", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería Mecatrónica
            p(data-aos="fade-up") Combinando la mecánica, la electrónica y la informática, estos ingenieros crean sistemas automatizados y robots inteligentes.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingeniería en Computación", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería en Computación
            p(data-aos="fade-up") Los ingenieros en computación desarrollan software, aplicaciones y sistemas de información que son esenciales para la Industria 4.0.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingeniería Industrial", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería Industrial
            p(data-aos="fade-up") Optimizan procesos, reducen costos y mejoran la eficiencia en la producción.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingeniería Electrónica", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería Electrónica
            p(data-aos="fade-up") Diseñan circuitos y sistemas electrónicos que son el corazón de los dispositivos inteligentes.

    h2 ¿Cuáles son los desafíos que enfrenta la ingeniería en la era de la automatización?
    p.mb-5 La ingeniería en la era de la automatización enfrenta importantes desafíos que requieren tanto actualización técnica como el desarrollo de competencias éticas y colaborativas. A continuación, se presentan algunos de los principales retos a los que se enfrentan los ingenieros en este contexto cambiante.

    .bg-fondo-3.bg-full-width.mb-5
      div.px-5.pb-md-3
        .row.mb-5
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mb-xl-0.mx-auto(data-aos="flip-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
              div.mb-4.px-1
                p.text-bold.text-center Adaptación a nuevas tecnologías
                p.text-small.px-4.text-center.pb-2 La tecnología evoluciona rápidamente, y los ingenieros deben actualizar constantemente sus conocimientos para mantenerse al día.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mb-xl-0.mx-auto(data-aos="flip-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4.px-1
                p.text-bold.text-center Desarrollo de habilidades blandas
                p.text-small.px-4.text-center.pb-2 Además de habilidades técnicas, se necesitan competencias como trabajo en equipo, comunicación y creatividad para adaptarse a entornos de trabajo colaborativos
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mb-xl-0.mx-auto(data-aos="flip-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
              div.mb-4.px-1
                p.text-bold.text-center Ética y responsabilidad 
                p.text-small.px-4.text-center.pb-2 Con el avance tecnológico, surgen nuevos desafíos éticos, como la privacidad de datos y el impacto social de la automatización. Los ingenieros deben definir estándares éticos.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mb-xl-0.mx-auto(data-aos="flip-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              div.mb-4.px-1
                p.text-bold.text-center Seguridad cibernética
                p.text-small.px-4.text-center.pb-2 La interconexión de sistemas industriales aumenta la vulnerabilidad a ciberataques, por lo que los ingenieros deben diseñar sistemas seguros y resilientes.

        h2 ¿Cómo pueden prepararse para el futuro?
        p.mb-4 En la era de la Industria 4.0, los ingenieros necesitan más que conocimientos técnicos: deben mantenerse actualizados, fomentar la creatividad, desarrollar habilidades blandas y cultivar una curiosidad constante. Estos elementos son esenciales para enfrentar los desafíos y aprovechar las oportunidades en un entorno en rápida evolución.

        .row.mb-4.justify-content-center.card_hover(data-aos="zoom-in-up")
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-row
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-44.svg', style="width: 68px")
              div.d-flex.flex-column.text-start.px-3.justify-content-center
                p.text-bold.mb-2 Mantense actualizado
                p.mb-0.text-small Seguir las últimas tendencias en tecnología y participar en cursos y talleres que permitan desarrollar nuevas habilidades.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-row
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-45.svg', style="width: 68px")  
              div.d-flex.flex-column.text-start.px-3.justify-content-center
                p.text-bold.mb-2 Desarrollar habilidades blandas
                p.mb-0.text-small Trabajar en equipo, comunica las ideas de manera efectiva y sé adaptable al cambio.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-row
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-46.svg', style="width: 68px")
              div.d-flex.flex-column.text-start.px-3.justify-content-center
                p.text-bold.mb-2 Cultivar la creatividad
                p.mb-0.text-small La innovación es clave en la Industria 4.0, así que no tengan miedo de pensar fuera de la caja.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-row
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-47.svg', style="width: 68px")
              div.d-flex.flex-column.text-start.px-3.justify-content-center
                p.text-bold.mb-2 Ser curioso
                p.mb-0.text-small La curiosidad es el motor de la innovación. Preguntar, experimentar y no se conformen con las respuestas fáciles.

    p.mb-5 La Industria 4.0 ofrece un mundo de posibilidades. Como ingeniero, tendrán la oportunidad de diseñar el futuro, de crear soluciones innovadoras a los desafíos más grandes de la humanidad y de dejar huella en el mundo. 

    h2 ¿Están listos para dar el primer paso?
    p.mb-4 Primero se debe aprender las 3 claves de la Industria 4.0. Para entender mejor esta revolución, vamos a centrarnos en tres pilares fundamentales:

    .row.mb-5
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Fabricación informatizada")
            p Las fábricas del futuro serán organismos inteligentes capaces de aprender, adaptarse y evolucionar. Gracias a la digitalización, pueden ajustar su producción en tiempo real, reduciendo costos y mejorando la eficiencia.
          .div(titulo="Digitalización de las plantas productivas")
            p Todo está conectado: desde las máquinas hasta los sistemas de gestión. Esta interconexión masiva de dispositivos, conocida como Internet de las Cosas (IoT), permite recopilar una gran cantidad de datos para tomar decisiones informadas y optimizar los procesos.
          .div(titulo="Sistemas ciberfísicos")
            p Estos sistemas combinan lo físico y lo digital, tomando decisiones autónomas basadas en los datos que recopilan, lo que los convierte en los verdaderos cerebros de las fábricas inteligentes.
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')

    h2 ¿Cómo llegamos hasta aquí? 
    p.mb-4 La Industria 4.0 no ha surgido de la nada. Es el resultado de una evolución que comenzó hace siglos:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.acordion-2
        AcordionA(tipo="b")
          .div(titulo="Primera revolución industrial")
            p La mecanización del trabajo gracias a la máquina de vapor.
          .div(titulo="Segunda revolución industrial")
            p La producción en masa facilitada por la electricidad y la línea de montaje.
          .div(titulo="Tercera revolución industrial")
            p La automatización de los procesos mediante sistemas eléctricos programables.
          .div(titulo="Cuarta revolución industrial")
            p La digitalización completa de la producción, con tecnologías como el Internet de las Cosas (IoT), la inteligencia artificial y el big data.

    h2 ¿Por qué es tan importante la Industria 4.0?
    p.mb-4 Las ventajas de esta revolución son múltiples:

    .row.mb-4.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.p-3.h-100.flex-row
          img.mb-3(src='@/assets/curso/unidad/img-50.svg', style="width: 68px")
          div.d-flex.flex-column.text-start.px-3.justify-content-center
            p.text-bold.mb-2 Mayor eficiencia.
            p.mb-0.text-small Al optimizar los procesos y reducir el desperdicio.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.p-3.h-100.flex-row
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-51.svg', style="width: 68px")  
          div.d-flex.flex-column.text-start.px-3.justify-content-center
            p.text-bold.mb-2 Mayor flexibilidad.
            p.mb-0.text-small  Las fábricas inteligentes pueden adaptarse rápidamente a los cambios del mercado.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.p-3.h-100.flex-row
          img.mb-3(src='@/assets/curso/unidad/img-52.svg', style="width: 68px")
          div.d-flex.flex-column.text-start.px-3.justify-content-center
            p.text-bold.mb-2 Mayor calidad. 
            p.mb-0.text-small Gracias a un control más preciso de la producción.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-left")
        .custom-image-card.d-flex.p-3.h-100.flex-row
          img.mb-3(src='@/assets/curso/unidad/img-53.svg', style="width: 68px")
          div.d-flex.flex-column.text-start.px-3.justify-content-center
            p.text-bold.mb-2 Mayor sostenibilidad. 
            p.mb-0.text-small Al utilizar los recursos de manera más eficiente y reducir el impacto ambiental.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-left")
        .custom-image-card.d-flex.p-3.h-100.flex-row
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-54.svg', style="width: 68px")
          div.d-flex.flex-column.text-start.px-3.justify-content-center
            p.text-bold.mb-2 Mayor innovación. 
            p.mb-0.text-small La industria 4.0 fomenta la creatividad y la búsqueda de nuevas soluciones.

    h2 ¿Qué oportunidades ofrece?
    p.mb-1 Como futuro ingeniero, la Industria 4.0 abre un mundo de posibilidades. Podrán desarrollar tecnologías innovadoras, diseñar sistemas inteligentes, optimizar procesos productivos y contribuir a construir un futuro más sostenible.
    p.mb-4 La Industria 4.0 es una oportunidad única para marcar la diferencia. Así que ponte las pilas, estudia con pasión y prepárate para liderar esta revolución tecnológica. ¡El mundo te necesita!

    .row.bg-azul-claro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.mr-auto Historia de la ingeniería y sus aplicaciones básicas
          p.mb-4 ¿Puede imaginar un mundo sin rascacielos, puentes que unan continentes o dispositivos que conecten personas en todo el planeta? ¿Qué ha impulsado la creación de nuevas ramas de la ingeniería a lo largo de la historia?

          p.mb-4 Lo invitamos a explorar este documento Historia de la ingeniería y sus aplicaciones básicas, que recorre cómo la ingeniería ha evolucionado, desde sus primeros logros hasta las especializaciones actuales, impulsada por avances científicos, necesidades sociales y tecnologías disruptivas. Conozca cómo los ingenieros de hoy enfrentan los desafíos más complejos de la humanidad, desde ciudades sostenibles hasta energía limpia, y cómo esta disciplina sigue moldeando el futuro.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Los_principios_fundamentales.pdf')" target="_blank")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/pdf.svg', alt='Texto que describa la imagen')
            p.fs-14px.my-auto.p-2.text-small <strong>Anexo.</strong> Historia de la ingeniería y sus aplicaciones básicas  

        .d-none.d-xl-block.col-xl-5.col-xxl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')

    h2 Ingenierías que surgieron tras la revolución industrial
    p.mb-5 Durante los siglos XIX y XX, surgieron ingenierías como la eléctrica, química, metalúrgica, de minas, y civil especializada, entre otras. Estas especializaciones respondieron a los avances tecnológicos y las demandas de una sociedad en constante transformación:

    .row.position-relative.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería eléctrica
              p.mb-0 Se desarrolló para diseñar sistemas eléctricos a gran escala, como redes de distribución y equipos electrónicos, impulsada por la invención del motor eléctrico.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería química
              p.mb-0 Enfocada en procesos químicos a gran escala, surgió debido a la demanda de productos químicos y materiales sintéticos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería metalúrgica
              p.mb-0 Desarrollada para estudiar y procesar metales, impulsada por la necesidad de materiales para la industria y construcción.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería de Minas
              p.mb-0 Especializada en la exploración y explotación de recursos minerales, surgió con el auge de la extracción de minerales y combustibles fósiles.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería civil especializada
              p.mb-0 Dividida en áreas como ingeniería estructural, hidráulica, geotécnica y de transporte, surgió para atender necesidades específicas de construcción.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Ingeniería industrial
              p.mb-0 Evolucionó hacia una disciplina enfocada en la optimización de procesos y la mejora continua de la productividad.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')

    h2 ¿Por qué han surgido estas nuevas ingenierías?
    p.mb-4 El avance de la tecnología, las necesidades sociales, la globalización y el cambio climático han impulsado el surgimiento de ingenierías modernas. Estas disciplinas emergentes abordan los desafíos de una sociedad globalizada y digitalizada.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img.-mt-18px(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Avances tecnológicos")
            p La evolución constante de la tecnología abre nuevas oportunidades y desafíos para la ingeniería.
          .div(titulo="Necesidades sociales")
            p Las demandas modernas en salud, energía y sostenibilidad impulsan el desarrollo de soluciones ingenieriles innovadoras.
          .div(titulo="Globalización")
            p La interconexión global genera nuevas necesidades en comunicación, transporte y logística.
          .div(titulo="Cambio climático")
            p La creciente preocupación por el cambio climático fomenta el desarrollo de tecnologías limpias y sostenibles.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2 
        h2 La era digital y la industria 4.0
    p.mb-4 Desde finales del siglo XX, la digitalización y la Industria 4.0 han revolucionado la ingeniería, integrando dispositivos conectados, inteligencia artificial, análisis de datos y robótica en los procesos de producción, lo que ha dado lugar a nuevas disciplinas.


    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Era digital", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Era digital
            p(data-aos="fade-up") Consolidada con dispositivos conectados, inteligencia artificial y big data, la Era Digital ha transformado la interacción humana y tecnológica.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Industria 4.0", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Industria 4.0
            p(data-aos="fade-up") Representa la cuarta revolución industrial, basada en la fusión de tecnologías digitales y físicas, como IoT, IA, análisis de datos y robótica, desarrollos característicos del siglo XXI.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Inteligencia artificial", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Inteligencia artificial
            p(data-aos="fade-up") Desarrolla sistemas capaces de aprender y tomar decisiones autónomas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Biotecnología", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Biotecnología
            p(data-aos="fade-up") Aplica principios de ingeniería a sistemas biológicos para desarrollar productos y tratamientos innovadores.

    h2 Tendencias actuales y el futuro de la ingeniería
    p.mb-4 La ingeniería del futuro se enfocará en sostenibilidad, desarrollo de materiales avanzados, realidad virtual y aumentada, y bioingeniería, para enfrentar los desafíos de un mundo en constante cambio.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Avances tecnológicos")
            p Desarrollo de soluciones ingenieriles que sean sostenibles y respetuosas con el medio ambiente.
          .div(titulo="Materiales avanzados")
            p Creación de materiales con propiedades únicas, como nanomateriales y materiales compuestos, para diversas aplicaciones.
          .div(titulo="Realidad virtual y aumentada")
            p Utilización de estas tecnologías para mejorar el diseño, simulación y capacitación en ingeniería.
          .div(titulo="Bioingeniería")
            p Convergencia de ingeniería y biología para innovaciones en medicina y agricultura.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')

    .row.bg-azul-claro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.mr-auto  Historia de la ingeniería y sus aplicaciones básicas
          p.mb-4 ¿Sabía que la ingeniería ha acompañado el desarrollo de la humanidad desde sus primeras herramientas hasta las tecnologías actuales? Este recorrido histórico explora cómo cada época, desde la antigüedad hasta el siglo XXI, ha impulsado avances clave en esta disciplina.

          p.mb-4 En el documento Historia de la ingeniería y sus aplicaciones básicas, encontrará una guía visual de los hitos más importantes y una explicación detallada de cada era, incluyendo la Revolución Industrial y las innovaciones modernas como el Internet de las Cosas. ¡Lo invitamos a descubrir cómo la ingeniería ha moldeado el mundo y sigue transformándolo hoy!
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Historia_de_la_ingeniería.pdf')" target="_blank")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/pdf.svg', alt='Texto que describa la imagen')
            p.fs-14px.my-auto.p-2.text-small <strong>Anexo.</strong> Historia de la ingeniería y sus aplicaciones básicas

        .d-none.d-xl-block.col-xl-5.col-xxl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
