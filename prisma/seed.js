const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main () {
  const categories = await prisma.category.createMany({
    data: [
      { title: 'Database' },
      { title: 'Programming' },
      { title: 'Health' },
      { title: 'Wellness' }
    ]
  })

  const posts = await prisma.post.createMany({
    data: [
      {
        title: 'Introduction to SQL',
        content: 'SQL is a powerful database language used to manage data.'
      },
      {
        title: 'The Benefits of Exercise',
        content: 'Exercise has been shown to improve overall health and reduce the risk of chronic diseases.'
      },
      {
        title: 'Python vs Java',
        content: 'Python and Java are two popular programming languages used for developing software applications.'
      }
    ]
  })

  console.log('Data seeded successfully')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
