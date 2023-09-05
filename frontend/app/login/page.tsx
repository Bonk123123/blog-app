'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const [signIn, setSignIn] = React.useState({email: '', password: ''})

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIn(prev => ({...prev, email: e.target.value}))
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIn(prev => ({...prev, password: e.target.value}))
  }

  return (
    <main className='flex container flex-col min-h-[calc(100vh-104px)] mx-auto justify-center items-center py-4 px-2 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 w-full'>
      <div className=' bg-body-light dark:bg-navbar-dark rounded-xl border dark:border-none shadow w-[95%] sm:w-[60%] h-[60%]'>
        <form className='flex flex-col justify-center items-center h-full gap-8 p-4'>
          <h1 className='uppercase text-xl -translate-y-10'>Login</h1>
          <div className='flex flex-col w-[80%] gap-2'>
            <input value={signIn.email} onChange={(e) => handleChangeEmail(e)} className='flex w-full border p-1 rounded-lg bg-slate-100 dark:bg-[#333333]' placeholder='email' type="email" />
            <input value={signIn.password} onChange={(e) => handleChangePassword(e)} className='flex w-full border p-1 rounded-lg bg-slate-100 dark:bg-[#333333]' placeholder='password' type="password" />
          </div>
          <div className='h-1 w-[80%] flex'>
            <p className='text-red-500 text-sm'>incorrect login or password</p>
          </div>
          <div className='flex w-[80%] gap-2'>
            <button className='p-1 w-1/2 border rounded-xl hover:bg-slate-100 dark:hover:bg-[#333333] duration-75 text-center' type="submit">sign in</button>
            <Link className='p-1 w-1/2 border rounded-xl hover:bg-slate-100 dark:hover:bg-[#333333] duration-75 text-center' href={'/registration'}>register</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default page

