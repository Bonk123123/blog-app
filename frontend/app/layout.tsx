'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense, useState } from 'react'

import Loading from './loading'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogic',
  description: 'WebApp for your Blogic posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [dark, setDark] = useState(false)
  
  return (
    <html className={dark ? 'dark' : ''} lang="en">
      
      
      <body className={inter.className}>
        <div className='bg-body-light dark:bg-body-dark min-h-screen text-text-light flex flex-col justify-between dark:text-text-dark'>
          <Navbar dark={dark} setDark={setDark} />
          <div className='mt-16 flex h-full'>
            {children}
          </div>
          <Footer />
        </div>
        
      </body>
    </html>
  )
}
