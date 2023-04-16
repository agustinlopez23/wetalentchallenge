import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Post App - WeTalent',
  description: 'Next Challenge for WeTalent'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen bg-background'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
