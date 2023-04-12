'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar () {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/' className='text-white font-bold'>
                Posts
              </Link>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link href='/categories' className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/categories' ? 'bg-gray-700' : ''}`}>

                  Categories

                </Link>
                <div className='relative'>
                  <button
                    className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${isOpen ? 'bg-gray-700' : ''} `}
                    onClick={handleMenuToggle}
                  >
                    Actions
                  </button>
                  {isOpen && (
                    <div className='absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg'>
                      <Link href='/create' className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'>

                        Create

                      </Link>
                      <Link href='/update' className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'>

                        Update

                      </Link>
                      <Link href='/delete' className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'>

                        Delete

                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
