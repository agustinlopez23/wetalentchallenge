async function getCategories () {
  const res = await fetch('http://localhost:3000/api/categories')
  if (!res.ok) { return console.log(res) }
  return res.json()
}
export default async function CategoryList () {
  const categories = await getCategories()
  return (
    <select className='block w-full rounded-md shadow-sm py-2 px-3 bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
      <option>Select</option>
      {categories?.map((c) =>

        <option key={c.id}>{c.title}</option>

      )}
    </select>
  )
}
