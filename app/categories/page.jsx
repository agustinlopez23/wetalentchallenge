import Buttons from '@/components/Button/Buttons'
import Allposts from '@/components/Button/Allposts'
import CategoryList from '@/components/Categories/CategoryList'
export default function Categories () {
  return (
    <div>
      <div className='flex flex-col mx-auto max-w-2xl 2xl:max-w-6xl mt-8 sm:mt-32 p-8 gap-6'>
        <p className='text-base font-semibold leading-7 text-secondary'>Categories</p>

        <dl className='divide-y divide-gray-100'>
          <dt className='text-sm font-medium leading-6 text-gray-900' />
        </dl>
        <CategoryList />
        <Buttons />
        <Allposts />

      </div>

    </div>
  )
}
