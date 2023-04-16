import React from 'react'
import CardBlogItem from './CardBlogItem'
// const posts = [
//   {
//     id: '1',
//     title: 'Post sobre programación',
//     content: 'Aprender a programar puede parecer abrumador al principio, pero con un poco de práctica y perseverancia, cualquier persona puede convertirse en un programador exitoso. Aquí te presentamos algunos consejos para comenzar:1. Encuentra un lenguaje de programación que te guste y aprende sus fundamentos.2. Escribe mucho código y practica regularmente.3. Busca proyectos en línea para trabajar y desarrollar tus habilidades.4. Únete a comunidades en línea de programadores para obtener apoyo y consejos.5. Mantén una mentalidad de crecimiento y sigue aprendiendo nuevos conceptos y técnicas.',
//     categories: [
//       { title: 'Tecnología' },
//       { title: 'Programación' }
//     ]
//   },
//   {
//     id: '2',
//     title: 'Post sobre música',
//     content: 'La década de los 80 fue una época dorada para la música rock, con artistas como Bon Jovi, Guns N Roses, AC/DC y Metallica liderando el camino. Aquí te presentamos algunas de las mejores canciones de rock de esa época:1. Livin on a Prayer de Bon Jovi.2. Sweet Child O Mine de Guns N Roses.3. Back in Black de AC/DC.4. Enter Sandman de Metallica. 5. Every Breath You Take de The Police. 6. Jump de Van Halen.7. Eye of the Tiger de Survivor. 8. I Love Rock n Roll de Joan Jett. 9. Crazy Train de Ozzy Osbourne.10. Pour Some Sugar on Me de Def Leppard.',
//     categories: [
//       { title: 'Arte' },
//       { title: 'Música' }
//     ]
//   },
//   {
//     id: '3',
//     title: 'Post sobre deportes',
//     content: 'El tenis es un deporte exigente que requiere habilidad, estrategia y resistencia física. Si quieres mejorar tu rendimiento en el tenis, aquí te presentamos algunos consejos:1. Practica regularmente para mejorar tus habilidades técnicas y físicas.2. Desarrolla una estrategia de juego sólida y adapta tu estilo de juego al de tus oponentes.3. Trabaja en tu condición física para aumentar tu resistencia y reducir el riesgo de lesiones.4. Mentaliza tu juego y mantén una actitud positiva y enfocada en el objetivo.5. Busca entrenamiento profesional y asesoramiento para mejorar aún más tu juego.',
//     categories: [
//       { title: 'Deportes' }
//     ]
//   }
// ]

async function getPosts () {
  const res = await fetch('http://localhost:3000/api/posts')
  if (!res.ok) { console.log(res) }
  return res.json()
}
export default async function CardBlogList () {
  const posts = await getPosts()

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-wider text-accent sm:text-4xl'>All Posts</h2>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts?.map((post) => (
            <CardBlogItem {...post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
