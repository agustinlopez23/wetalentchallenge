'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navigation from './Navigation'
import NavigationDisclousure from './NavigationDisclousure'
import Button from './Button'
import Logo from './../../public/logo.png'
import Image from 'next/image'

const navigation = [
  { name: 'Posts', href: '/', current: true },
  { name: 'Categories', href: '/categories', current: false },
  { name: 'Create', href: '/create', current: false }

]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar () {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Button Bars3Icon={Bars3Icon} XMarkIcon={XMarkIcon} open={open} />
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                {/* Logo */}
                <div className='flex flex-shrink-0 items-center'>
                  <Image src={Logo} className='w-6 h-6' alt='Logo from blog' />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  {/* Links List Items */}
                  <Navigation classNames={classNames} navigation={navigation} />
                </div>
              </div>

            </div>
          </div>
          {/* Links List Items on disclousure */}
          <NavigationDisclousure classNames={classNames} navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}
