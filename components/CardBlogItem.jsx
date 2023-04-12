'use client'
import Image from 'next/image'
import { LinkIcon } from '@heroicons/react/24/outline'
export default function CardBlogItem ({ image = LinkIcon, title = 'hello', description = 'world', categorie = 'hiii' }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg flex flex-col p-6'>
      <div className='flex flex-row items-center gap-5'><LinkIcon className='w-4' /><div className='font-bold text-xl mb-2'>{title}</div></div>

      <div className='px-6 py-4'>

        <p className='text-gray-500 text-base'>{description}</p>
        <p className='text-gray-600 text-base'>{categorie}</p>
      </div>
    </div>
  )
}
