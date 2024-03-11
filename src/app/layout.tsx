import type { Metadata } from 'next'
import { Dancing_Script as Dancing, Poppins } from 'next/font/google'
import './globals.css'

const dancing = Dancing({ subsets: ['latin'], variable: '--font-dancing' })
const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Challenge: Best video of all time',
  description: 'Best video of all time',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancing.variable} font-sans bg-gray-950 text-gray-100`}>
        <div className="flex flex-col items-center justify-center h-screen">
          <a href="/" className="mt-16 text-5xl font-bold font-alt">The best youtube video of "All time"</a>
          <div className="mt-10">
            <a href="/user/login" className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-md mr-4 mb-2 hover:bg-gray-800">Sign in</a>
            <a href="/user/register" className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-md mb-2 hover:bg-gray-800">Sign up</a>
          </div>
          {children}
        </div>        
      </body>
    </html>
  )
}
