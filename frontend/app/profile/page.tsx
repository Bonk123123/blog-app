import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import ImageArt from '@/components/createArticleComponents/ImageArt/ImageArt'
import ImageAvatar from '@/components/ImageAvatar/ImageAvatar'

let img: string

async function fetchProfile(id: number) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export async function Profile(id: number) {
  const profile = await fetchProfile(id)
  if (!profile) {
    redirect('/login')
  }

}


const page = () => {
  return (
    <main className='flex container flex-col min-h-[calc(100vh-104px)] mx-auto justify-start py-4 px-2 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 w-full'>
      <div className=' bg-body-light dark:bg-navbar-dark rounded-xl border dark:border-none shadow'>

        <div className='flex flex-col sm:flex-row gap-3 w-full justify-between items-center p-3'>
          <div className='flex w-full justify-start items-center'>
            <div className='w-1/3 h-full rounded-full gap-2 flex justify-center items-center'>
              { img? 
              (
                  <Image className='w-1/2 h-1/2' src={img} alt={''}/>
              ) 
                  : 
              (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image w-1/2 h-1/2" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/> </svg>
              )
              }
            </div>
            <h1 className='text-lg text-center w-2/3 sm:text-xl md:text-xl lg:text-3xl'>Zoloev Arthur</h1>
          </div>
          <div className='w-full h-full justify-center items-center flex'>
            <ImageAvatar />
          </div>
        </div>
        <section className='flex w-full justify-center items-center p-2 border-t'>
          graph of views
        </section>
        <section className='flex w-full justify-center items-center p-2 border-t'>
          my posts
        </section>
      </div>
    </main>
  )
}

export default page