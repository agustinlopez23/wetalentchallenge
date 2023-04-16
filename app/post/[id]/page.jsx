'use client'
import Allposts from '@/components/Button/Allposts'
import Post from '@/components/PostSection/Post'
import Link from 'next/link'

export default function Postpage ({ params }) {
  const { id } = params

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Post />
        <Allposts />
      </div>
    </>

  )
}
