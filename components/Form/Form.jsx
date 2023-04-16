import React from 'react'
import Allposts from '../Button/Allposts'
export default function Form () {
  return (
    <div className='flex flex-col mx-auto max-w-2xl 2xl:max-w-6xl mt-8 sm:mt-32 p-8 gap-6'>
      <p className='text-base font-semibold leading-7 text-secondary'>Create Post</p>

      <dl className='divide-y divide-gray-100'>
        <dt className='text-sm font-medium leading-6 text-gray-900' />
      </dl>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label for='username' className='block text-sm font-medium leading-6 text-gray-900'>Title</label>
                <div className='mt-2'>
                  <div class='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input type='text' name='username' id='username' autocomplete='username' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                  </div>
                </div>
              </div>

              <div className='col-span-full'>
                <label for='about' className='block text-sm font-medium leading-6 text-gray-900'>Content</label>
                <div className='mt-2'>
                  <textarea id='about' name='about' rows='3' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-600'>Write a content of the post.</p>
              </div>
            </div>

            <button type='submit' className='relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-900 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-200 hover:from-gray-50 hover:to-white active:to-white'>
              <span className='w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100' />
              <span className='h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100' />
              Create Post
            </button>
          </div>
        </div>
      </form>

      <Allposts />

    </div>

  )
}
