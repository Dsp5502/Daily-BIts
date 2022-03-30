const preguntasDaily = [
  {
    respuesta: 'main',
    personaje:
      'https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Property_1_1_pl63sg.png',
    question:
      '¿Qué etiqueta es semánticamente correcta para el contenido principal?',

    opciones: [
      {
        a: 'main',
      },
      {
        b: 'section',
      },
      {
        c: 'header',
      },
    ],
  },
  {
    personaje:
      'https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Property_1_2_flbygy.png',
    question:
      '¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?',
    opciones: [
      {
        a: '<br>',
        correct: false,
      },
      {
        b: '<script>',
        correct: true,
      },
      {
        c: '<styles>',
        correct: false,
      },
    ],
  },
  {
    personaje:
      'https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Property_1_3_pktixl.png',
    question: '¿Qué significa DRY?',
    opciones: [
      {
        a: 'Don’t repeat yellow',
        correct: false,
      },
      {
        b: 'Don’t repeat yourself',
        correct: true,
      },
      {
        c: 'Don’t recicle year',
        correct: false,
      },
    ],
  },
];

export default preguntasDaily;
