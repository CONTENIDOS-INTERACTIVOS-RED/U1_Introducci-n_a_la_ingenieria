<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Fundamentos de la Ingeniería'" :subTitulo="'1. Fundamentos de la ingeniería'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Como estudiantes de ingeniería, se embarcan en un <strong>viaje que fusiona teoría y creatividad práctica</strong>. Imaginen su mente como un taller donde se forjan soluciones innovadoras, combinando herramientas como matemáticas, física y lógica para desentrañar los principios que rigen su entorno. Sin embargo, la ingeniería no se limita a números y fórmulas; también impulsa a explorar el lado creativo, donde la imaginación y la intuición transforman ideas abstractas en realidades, como lo haría un artista al moldear un lienzo.

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Más allá de una profesión, la ingeniería representa una forma de pensar y analizar problemas desde perspectivas múltiples, uniendo conceptos aparentemente opuestos para diseñar soluciones adecuadas y relevantes.
        p.mb-4 A medida que avanzan en sus estudios, descubrirán el poder de esta disciplina para generar un impacto positivo en el mundo. El trabajo de un ingeniero va desde crear tecnologías sostenibles hasta diseñar infraestructuras que mejoran la vida de las personas, dejando una huella duradera en la sociedad.
        p.mb-0 La ingeniería también fomenta habilidades fundamentales en la resolución de problemas, como:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')  

    .row.mb-5.justify-content-center.card_hover
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-10.svg', style="width: 80px")
          p.px-1.align-items-center.text-small.mb-0.d-flex La capacidad para identificar necesidades específicas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
          p.px-1.align-items-center.text-small.mb-0.d-flex Evaluar riesgos y tomar decisiones informadas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
          p.px-1.align-items-center.text-small.mb-0.d-flex Pensar de manera crítica y encontrar soluciones creativas a desafíos complejos.

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(style="margin-left: -4px")
        p.mb-0(data-aos="fade-up") Cada proyecto será una oportunidad para <strong>fortalecer estas habilidades</strong>, promoviendo el crecimiento tanto personal como profesional. Además, esta disciplina se apoya en principios sólidos, acumulados a lo largo de siglos de innovación, que funcionan como cimientos para resolver cualquier desafío, desde construir un puente hasta desarrollar software. Estos principios no solo facilitan la búsqueda de soluciones óptimas y responsables, sino que también enseñan a ver el mundo desde una perspectiva estructurada, permitiendo identificar patrones y conexiones entre ideas dispares.
    p.mb-4(data-aos="zoom-in") Cualquier proyecto de ingeniería sigue un proceso claro que comienza con una idea y culmina en un producto o servicio final. Este proceso implica planificación, ejecución y constante evaluación, adaptándose a un campo dinámico y en constante evolución. Como ingenieros, deberán abrazar cada proyecto como una oportunidad de aprendizaje, contribuyendo así tanto a la sociedad como a su propio desarrollo profesional.

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/pdf-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 Los principios fundamentales
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Estos fundamentos son la base que guía a los ingenieros desde la identificación de problemas hasta la creación y mejora de sistemas. La ética, la responsabilidad social y la colaboración son pilares esenciales en cada proyecto. ¡Se invita a explorar el documento Los <strong>principios fundamentales</strong>, para descubrir cómo estos principios transforman ideas en soluciones que benefician a la sociedad!
            .col-sm-auto
              a.download-btn.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Los_principios_fundamentales.pdf')" target="_blank")
                span.text-small Descargar
                i.fas.fa-arrow-right

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1 
        h2 El ciclo de la ingeniería 
    p.mb-5 El ciclo de la ingeniería representa un enfoque organizado y eficiente para resolver problemas complejos, mediante fases de identificación, investigación, diseño, implementación y evaluación, se asegura que cada solución cumpla con los estándares de calidad y responda a las necesidades de la sociedad. A continuación, pueden se detalla cada etapa del proceso:


    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold 01. Identificación de necesidades y problemas
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Detectar necesidades:</strong> del mercado, análisis de tendencias, feedback de usuarios.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Definir el problema:</strong> Establecer claramente el problema a resolver y sus límites.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 02. Investigación y desarrollo
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Recopilación de información:</strong> Búsqueda bibliográfica, patentes, estudios de caso.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Análisis de tecnologías:</strong> Evaluación de tecnologías existentes y emergentes.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Desarrollo de conceptos:</strong> Generación de ideas y conceptos innovadores.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 03. Diseño y optimización
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Diseño conceptual:</strong> Creación de bocetos y modelos preliminares.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Análisis de diseño:</strong> Simulación, prototipado, evaluación de costos.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Optimización:</strong> Mejora del diseño en función de los criterios establecidos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 04. Desarrollo y fabricación
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Selección de materiales:</strong> Elección de materiales adecuados para el producto o servicio.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Proceso de fabricación:</strong> Selección de los procesos de producción más eficientes.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Control de calidad:</strong> Implementación de sistemas de control de calidad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 05. Implementación y pruebas
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Integración de componentes:</strong> Ensamblaje del producto final.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Pruebas de funcionamiento:</strong> Verificación del cumplimiento de los requisitos.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Corrección de errores:</strong> Identificación y corrección de cualquier problema. 
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 06. Lanzamiento al mercado
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Introducción al mercado: </strong>Lanzamiento del producto o servicio.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Promoción y ventas:</strong> Actividades de marketing y ventas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-19-1.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 07. Mantenimiento
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Mantenimiento preventivo:</strong> Se realizan tareas de mantenimiento programadas para evitar fallas.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Mantenimiento correctivo:</strong> Se solucionan los problemas que surgen durante la operación.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-20-1.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold 08. Evaluación
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0  <strong>Análisis de resultados: </strong> Se comparan los resultados obtenidos con los objetivos establecidos.
              div.d-flex.mb-0
                img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Lecciones aprendidas: </strong> Se identifican las mejores prácticas y las áreas de mejora para futuros proyectos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-21-1.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2 
        h2 Fundamentos de la ingeniería: un pilar para la innovación
    p.mb-4 La ingeniería, en esencia, es la aplicación del conocimiento científico y matemático para diseñar, construir y mejorar estructuras, máquinas, sistemas y procesos que resuelvan problemas y satisfagan las necesidades de la sociedad. Los fundamentos de la ingeniería son los principios básicos sobre los cuales se construye toda esta disciplina. Los pilares fundamentales de la ingeniería incluyen:

    TabsC
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Matemáticas", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Matemáticas
            p(data-aos="fade-up") Son la base para modelar sistemas, analizar datos y realizar cálculos precisos. Desde el cálculo diferencial e integral hasta el álgebra lineal, las matemáticas son esenciales para cualquier ingeniero.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Física", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Física
            p Proporciona los principios fundamentales que rigen el comportamiento de la materia y la energía. La mecánica, la termodinámica, la electricidad y el magnetismo son algunas de las ramas de la física más relevantes para la ingeniería.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Química", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Química
            p Es fundamental en campos como la ingeniería de materiales, la ingeniería química y la ingeniería ambiental. Permite comprender las propiedades de los materiales y los procesos de transformación.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ciencias de la computación", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ciencias de la computación
            p Con el avance de la tecnología, la programación y el análisis de datos se han vuelto fundamentales en la ingeniería. La inteligencia artificial, el aprendizaje automático y la robótica son áreas en auge.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
