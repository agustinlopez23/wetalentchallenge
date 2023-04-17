import Link from 'next/link'
import React from 'react'
import Buttons from '../Button/Buttons'
async function getPost (id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  if (!res.ok) { return console.log(res) }
  return res.json()
}
export default async function Post ({ id }) {
  const post = await getPost(id)
  return (

    <div className='flex flex-col mx-auto max-w-2xl 2xl:max-w-6xl mt-8 sm:mt-32 p-8'>
      <p className='text-base font-semibold leading-7 text-secondary'>Post</p>
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl'>{post.title}</h1>
      <dl className='divide-y divide-gray-100'>
        <dt className='text-sm font-medium leading-6 text-gray-900' />
        <p className='mt-6 text-l 2xl:text-xl leading-8 text-text'>
          {post.content}
        </p>
      </dl>
      <div className='flex items-center gap-4 text-xs flex-wrap m-3'>
        {post.categories.map((category) => (<Link
          key={category.id}
          href='#'
          className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                                            >
          {category.title}
                                            </Link>))}

      </div>
      <Buttons />
    </div>

  )
}
