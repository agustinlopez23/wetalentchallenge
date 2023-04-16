const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed () {
  // Insertar categorías
  const categories = await prisma.category.createMany({
    data: [
      { title: 'Noticias' },
      { title: 'Deportes' },
      { title: 'Tecnología' },
      { title: 'Entretenimiento' }
    ]
  })

  // Insertar publicaciones
  const posts = await prisma.post.createMany({
    data: [
      {
        title: 'Título de la primera publicación',
        content: 'Contenido de la primera publicación',
        categories: {
          connect: [
            { id: categories[0].id }, // Categoría "Noticias"
            { id: categories[3].id } // Categoría "Entretenimiento"
          ]
        }
      },
      {
        title: 'Título de la segunda publicación',
        content: 'Contenido de la segunda publicación',
        categories: {
          connect: [
            { id: categories[1].id }, // Categoría "Deportes"
            { id: categories[2].id } // Categoría "Tecnología"
          ]
        }
      },
      {
        title: 'Título de la tercera publicación',
        content: 'Contenido de la tercera publicación',
        categories: {
          connect: [
            { id: categories[0].id }, // Categoría "Noticias"
            { id: categories[1].id }, // Categoría "Deportes"
            { id: categories[2].id } // Categoría "Tecnología"
          ]
        }
      }
    ]
  })

  console.log('Seed completado')
}

seed()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
