'use client'
import React from 'react'
import { redirect } from 'next/navigation'

import CanvasArt from '@/components/createArticleComponents/CanvasArt/CanvasArt'
import ImageArt from '@/components/createArticleComponents/ImageArt/ImageArt'
import TextArt from '@/components/createArticleComponents/TextArt/TextArt'

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

  const [modal, setModal] = React.useState(false)
  const [pieces, setPieces] = React.useState<number[]>([])

  const modalRef = React.useRef(null)

  React.useEffect(() => {
    // console.log(modalRef.current)
    // let modalDiv = modalRef.current as unknown as HTMLElement
    // document.body.addEventListener('click', (e) => {
    //   console.log(modalRef.current)
    //   console.log(modalRef.current, modalDiv, !modalDiv.contains((e.target as HTMLElement)))
    //   if (modalDiv && !modalDiv.contains((e.target as HTMLElement))) setModal(false)
    // })

    // return () => {
    //   document.body.removeEventListener('click', (e) => {
    //     if (e.target !== modalRef.current) setModal(false)
    //   })
    // }
  }, [])

  const addPiece = (item: number) => {
    setPieces(prev => [...prev, item])
    setModal(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className='flex container flex-col min-h-[calc(100vh-104px)] mx-auto justify-start py-4 px-2 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 w-full'>
      <form method='post' onSubmit={(e) => handleSubmit(e)} className='relative bg-body-light dark:bg-navbar-dark rounded-xl border dark:border-none shadow p-2'>
        <div className='flex w-full justify-center items-center px-10 py-2'>
          <input className='flex w-full border text-center p-1 rounded-lg bg-slate-100 dark:bg-[#333333]' size={50} placeholder="post name" type="text" />
        </div>
        <section className='flex flex-col gap-5 w-full justify-start items-center py-2'>
          { pieces.map((item, i) => {
            return (
              <div className='flex flex-col w-full justify-center items-center relative gap-2'>
                <span onClick={() => setPieces(prev => prev.filter((_, j) => i != j))} className='flex -rotate-90 sm:rotate-0 sm:absolute -top-2 -right-10 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
                </span>
                { item == 0 && 
                (
                  <TextArt />
                ) }
                { item == 1 && 
                (
                  <ImageArt />
                ) }
                { item == 2 && 
                (
                  <CanvasArt />
                ) }
                { item == 3 && 
                (
                  <span className='h-1 w-full flex border-b'></span>
                ) }
              </div>
            )
          }) }
        </section>
        <button className='border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' onClick={() => setModal(prev => !prev)}>add</button>
        { modal ? 
        (
          <div ref={modalRef} className='absolute bottom-3 left-3 flex flex-col w-1/3 border rounded-xl p-2 gap-1 mt-4 z-20 bg-navbar-light dark:bg-navbar-dark'>
            <button type='button' className='p-1 border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' onClick={() => addPiece(0)}>Text</button>
            <button type='button' className='p-1 border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' onClick={() => addPiece(1)}>Image</button>
            <button type='button' className='p-1 border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' onClick={() => addPiece(2)}>Canvas</button>
            <button type='button' className='p-1 border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' onClick={() => addPiece(3)}>Line</button>
          </div>
        ) 
        : 
        (
          <></>
        ) }
        <button type="submit" className='border rounded-xl w-full mt-2 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>send to check</button>
      </form>
    </main>
  )
}

export default page