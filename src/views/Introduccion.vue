<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'Unidad 1. Fundamentos de la Ingeniería'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-left")
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") A continuación, se presenta un panorama introductorio al fascinante mundo de la ingeniería. En esta unidad, exploraremos los fundamentos que sustentan esta disciplina, abarcando desde los principios básicos hasta la construcción de habilidades esenciales para todo ingeniero. La ingeniería, como fuerza motriz detrás de los avances tecnológicos, permite que el estudiante, en su rol de futuro ingeniero, contribuya a resolver los desafíos más importantes de la sociedad. Esta unidad establecerá las bases para su formación, brindándole una visión general de las diversas ramas de la ingeniería, así como de las herramientas y métodos clave que empleará en su carrera profesional.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  
    
    p.mb-4 En esta unidad, el objetivo es que se adentren en los cimientos de la ingeniería, estos principios que han dado forma a algunas de las creaciones más impresionantes de la humanidad. Imagine diseñar edificios resistentes a terremotos, crear software que transforme nuestras vidas o desarrollar tecnologías limpias que ayuden a preservar el planeta. <strong>¡Todo esto y más está al alcance de un ingeniero!</strong>
    p.mb-4 Esta introducción busca dotarlos de las herramientas necesarias para que puedan:

    .row.mb-4.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-2.svg', style="width: 68px")
          
          p.mb-3.text-center.text-small Comprender los principios básicos de la ingeniería
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-3.svg', style="width: 68px")  
          
          p.mb-3.text-center.text-small Desarrollar habilidades de pensamiento crítico y resolución de problemas
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-4.svg', style="width: 68px")
          
          p.mb-3.text-center.text-small Explorar las diversas ramas de la ingeniería y descubrir su pasión en esta carrera
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-down-left")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-5.svg', style="width: 68px")
          p.mb-3.text-center.text-small Adquirir los conocimientos fundamentales para continuar su formación y alcanzar el éxito profesional

    p.mb-4.text-bold ¿Alguna vez se ha preguntado cómo funciona un smartphone, cómo se construye un rascacielos o cómo se diseñan los automóviles?

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-7.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Detrás de cada uno de estos avances tecnológicos se encuentra la ingeniería. En este curso, descubrirá cómo los ingenieros convierten ideas en realidad y cómo su trabajo influye directamente en la vida cotidiana. Aprenderá a pensar como un ingeniero, a resolver problemas complejos y a proponer soluciones innovadoras que contribuyan a mejorar el mundo.
    p.mb-0 A lo largo de esta unidad, realizaremos un recorrido por el mundo de la ingeniería. Empezaremos con los fundamentos teóricos que sustentan esta disciplina, desde principios científicos hasta aplicaciones prácticas. Luego, profundizaremos en las diferentes ramas de la ingeniería y los desafíos que enfrentan los ingenieros en el entorno real. Al finalizar, tendrá una visión clara de lo que significa ser ingeniero y estará listo para enfrentar los retos de su futura carrera profesional.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
