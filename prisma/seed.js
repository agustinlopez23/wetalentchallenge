const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const data = [
  {
    title: '5 consejos para mantener una vida saludable',
    content: 'En este post compartimos algunos consejos para llevar una vida saludable, incluyendo recomendaciones sobre alimentación y ejercicio físico.',
    categories: [
      {
        title: 'Salud'
      },
      {
        title: 'Ejercicio físico'
      }
    ]
  },
  {
    title: 'Cómo decorar tu casa con plantas',
    content: 'En este artículo te enseñamos algunas ideas para decorar tu casa con plantas, incluyendo tips de cuidado y las especies más recomendadas.',
    categories: [
      {
        title: 'Decoración'
      },
      {
        title: 'Plantas'
      }
    ]
  },
  {
    title: 'El futuro de la educación: ¿qué nos depara?',
    content: 'En este post reflexionamos sobre los desafíos y oportunidades que presenta el futuro de la educación, y cómo podemos prepararnos para él.',
    categories: [
      {
        title: 'Educación'
      },
      {
        title: 'Tecnología'
      }
    ]
  },
  {
    title: 'Cómo planificar un viaje de mochilero',
    content: 'En este post te damos algunos consejos para planificar un viaje de mochilero por Europa, desde la elección de destinos hasta la compra de pasajes y alojamiento.',
    categories: [
      {
        title: 'Viajes'
      },
      {
        title: 'Mochilero'
      }
    ]
  }
]
async function seed () {
  for (const post of data) {
    const { title, content, categories } = post

    const postRecord = await prisma.post.create({
      data: {
        title,
        content,
        categories: {
          create: categories.map(category => ({ title: category.title }))
        }
      }
    })

    console.log(`Post creado con id: ${postRecord.id}`)
  }
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
