import Link from 'next/link'
import React from 'react'
import Buttons from '../Button/Buttons'
export default function Post () {
  return (

    <div className='flex flex-col mx-auto max-w-2xl 2xl:max-w-6xl mt-8 sm:mt-32 p-8'>
      <p className='text-base font-semibold leading-7 text-secondary'>Post</p>
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl'>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam</h1>
      <dl className='divide-y divide-gray-100'>
        <dt className='text-sm font-medium leading-6 text-gray-900' />
        <p className='mt-6 text-l 2xl:text-xl leading-8 text-text'>
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
          eget aliquam. Quisque id at vitae feugiat egestas.Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
          eget aliquam. Quisque id at vitae feugiat egestas.Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
          eget aliquam. Quisque id at vitae feugiat egestas.Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
          eget aliquam. Quisque id at vitae feugiat egestas.Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
          eget aliquam. Quisque id at vitae feugiat egestas.
        </p>
      </dl>
      <div className='flex items-center gap-4 text-xs flex-wrap m-3'>
        <Link
          href='#'
          className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
        >
          category
        </Link>

      </div>
      <Buttons />
    </div>

  )
}
