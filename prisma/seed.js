const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const data = [
  {
    title: 'Post sobre programación',
    content: 'Aprender a programar puede parecer abrumador al principio, pero con un poco de práctica y perseverancia, cualquier persona puede convertirse en un programador exitoso. Aquí te presentamos algunos consejos para comenzar:1. Encuentra un lenguaje de programación que te guste y aprende sus fundamentos.2. Escribe mucho código y practica regularmente.3. Busca proyectos en línea para trabajar y desarrollar tus habilidades.4. Únete a comunidades en línea de programadores para obtener apoyo y consejos.5. Mantén una mentalidad de crecimiento y sigue aprendiendo nuevos conceptos y técnicas.',
    categories: [
      { title: 'Tecnología' },
      { title: 'Programación' }
    ]
  },
  {
    title: 'Post sobre música',
    content: 'La década de los 80 fue una época dorada para la música rock, con artistas como Bon Jovi, Guns N Roses, AC/DC y Metallica liderando el camino. Aquí te presentamos algunas de las mejores canciones de rock de esa época:1. Livin on a Prayer de Bon Jovi.2. Sweet Child O Mine de Guns N Roses.3. Back in Black de AC/DC.4. Enter Sandman de Metallica. 5. Every Breath You Take de The Police. 6. Jump de Van Halen.7. Eye of the Tiger de Survivor. 8. I Love Rock n Roll de Joan Jett. 9. Crazy Train de Ozzy Osbourne.10. Pour Some Sugar on Me de Def Leppard.',
    categories: [
      { title: 'Arte' },
      { title: 'Música' }
    ]
  },
  {
    title: 'Post sobre deportes',
    content: 'El tenis es un deporte exigente que requiere habilidad, estrategia y resistencia física. Si quieres mejorar tu rendimiento en el tenis, aquí te presentamos algunos consejos:1. Practica regularmente para mejorar tus habilidades técnicas y físicas.2. Desarrolla una estrategia de juego sólida y adapta tu estilo de juego al de tus oponentes.3. Trabaja en tu condición física para aumentar tu resistencia y reducir el riesgo de lesiones.4. Mentaliza tu juego y mantén una actitud positiva y enfocada en el objetivo.5. Busca entrenamiento profesional y asesoramiento para mejorar aún más tu juego.',
    categories: [
      { title: 'Deportes' }
    ]
  }
]

async function main () {
  console.log('Start seeding ...')
  for (const post of data) {
    const categories = post.categories.map(category => ({ title: category.title }))
    delete post.categories
    await prisma.post.create({
      data: {
        ...post,
        categories: {
          create: categories
        }
      }
    })
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
