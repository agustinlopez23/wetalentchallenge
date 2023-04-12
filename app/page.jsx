import CardBlogItem from '@/components/CardBlogItem'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main>
      <h1>pagehome</h1>
      <CardBlogItem />
    </main>
  )
}
