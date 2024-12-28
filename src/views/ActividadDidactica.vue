<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de Ingeniería',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Comprender los conceptos fundamentales de la ingeniería y su diferenciación con otras disciplinas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones mejor describe la ingeniería?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una ciencia exacta que se basa únicamente en cálculos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una disciplina que combina conocimientos teóricos y prácticos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una actividad artística que se enfoca en la creatividad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una profesión que solo se ocupa de construir edificios',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué papel juega la creatividad en la ingeniería?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una habilidad poco importante',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es esencial para encontrar soluciones innovadoras',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo es útil en ciertas áreas de la ingeniería',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se contrapone al pensamiento lógico',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué significa pensar como un ingeniero?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser capaz de resolver problemas de manera lógica y sistemática',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tener una gran capacidad para memorizar fórmulas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser experto en el uso de software de diseño asistido por computadora',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser capaz de trabajar solo sin la ayuda de otros',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La principal diferencia entre un científico y un ingeniero es que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El científico descubre y el ingeniero aplica',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El científico trabaja en un laboratorio y el ingeniero en una obra',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El científico es más creativo y el ingeniero más lógico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ambos cumplen las mismas funciones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La principal diferencia entre un científico y un ingeniero es que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El científico descubre y el ingeniero aplica',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El científico trabaja en un laboratorio y el ingeniero en el campo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El científico es más teórico y el ingeniero más práctico',
              esCorrecta: false,
            },
            { id: 'd', texto: 'tienen muchas diferencias', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
