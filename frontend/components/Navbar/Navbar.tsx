import Link from 'next/link'
import React from 'react'
import SearchInput from '../SearchInput/SearchInput'

interface props {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}



const Navbar = ({ dark, setDark }: props) => {
    let login = false
    return (
        <nav className='bg-navbar-light dark:bg-navbar-dark p-3 border-b-2 dark:border-b-0 shadow fixed w-full z-10'>
            <div className='md:px-32 flex container mx-auto w-full whitespace-nowrap justify-between'>
                <div className='w-1/3'>
                    <Link className=' uppercase' href={'/'}>Blogic</Link>
                </div>
                <div className='w-1/3 hidden justify-end sm:flex relative'>
                    <SearchInput />
                </div>
                <ul className='flex w-2/3 sm:w-1/3 justify-end gap-6'>
                    <li>
                        <button onClick={() => setDark(prev => !prev)} className='flex items-center h-full justify-center w-7 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>
                            { dark ? 
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>
                            ) 
                                : 
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/> </svg>

                            )
                            }
                            
                            
                            
                        </button>
                    </li>
                    <li>
                        <Link className='flex items-center h-full w-7 justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' href={'/new-article'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg> 
                        </Link>
                    </li>
                    <li className='flex justify-center items-center overflow-hidden'>
                        <Link className='h-6 w-6 rounded-full bg-slate-300  flex' href={login ? '/profile' : '/login'}></Link>
                    </li>
                </ul>
            </div>
            
        </nav>
  )
}

export default Navbar