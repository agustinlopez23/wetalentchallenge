import { Disclosure } from '@headlessui/react'

export default function Button ({ Bars3Icon, XMarkIcon, open }) {
  return (
    <>{/* Mobile menu button */}
      <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
        <span className='sr-only'>Open main menu</span>
        {open
          ? (
            <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
            )
          : (
            <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
            )}
      </Disclosure.Button>
    </>

  )
}