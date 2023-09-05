'use client'
import React from 'react'
import Filter from '../Filter/Filter'

interface props {
    show: boolean
}

const SearchInput = () => {

    const [input, setInput] = React.useState('')
    const [modal, setModal] = React.useState(true)

    return (
        <>
            <input value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} type="text" className='focus:border-transparent focus:ring-0 rounded-lg border rounded-r-none border-r-white bg-navbar-light dark:bg-navbar-dark' />
            <button onClick={() => setModal(prev => !prev)} className='border p-1 rounded-r-lg bg-slate-100 dark:bg-navbar-dark hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
            </button>
            { modal ? <Filter /> : <></> }
        </>
  )
}

export default SearchInput