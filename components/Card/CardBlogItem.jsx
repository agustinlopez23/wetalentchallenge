import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function CardBlogItem ({ title, content, categories, id }) {
  return (
    <article key={id} className='flex max-w-xl flex-col items-start justify-between hover:scale-105 transition-transform duration-200 ease-out'>
      <div className='flex items-center gap-x-4 text-xs ' />
      {/* Post container */}
      <div className='group relative'>
        <h3 className='mt-3 text-xl font-semibold leading-6 text-text group-hover:text-black'>
          <p>
            <span className='absolute inset-0 text-link' />
            {title}
          </p>
        </h3>
        <p className='mt-5 line-clamp-5 text-sm leading-6 text-gray-600'>{content}</p>{/* categories container */}
        <div className='flex gap-2'> {categories.map(({ title }) =>
          <p className='relative z-10 py-1.5 text-text font-medium'>{title}
          </p>
        )}
        </div>
      </div>

      <a href={`post/${id}`} className='mt-5 font-bold flex items-center text-primary hover:underline cursor-pointer'>
        Read Post
        <ArrowUpRightIcon className='ml-2 h-4 w-4 text-black' />
      </a>

    </article>

  )
}
