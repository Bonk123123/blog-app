'use client'
import React from 'react'

const ImageAvatar = () => {
    const input = React.useRef<HTMLInputElement>(null)



    const handleClickPick = () => {
        input.current?.click()
    }

    const handleSaveAvatar = () => {
        // axios
    }

    const handleCancelAvatar = () => {
        setFile(null);
    }

    const [file, setFile] = React.useState<File | null | undefined>(null)

    return (
        <>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.currentTarget.files?.[0])} ref={input} className='hidden' type="file" />
            { file ? 
            (
                <div className='flex w-full gap-2 justify-center items-center'>
                    <button onClick={handleSaveAvatar} className='p-1 whitespace-nowrap border rounded-xl hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>Save</button>
                    <button onClick={handleCancelAvatar} className='p-1 whitespace-nowrap border rounded-xl hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>Cancel</button>
                </div>
            ) 
            : 
            (
                <button onClick={handleClickPick} className='p-1 whitespace-nowrap border rounded-xl hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>Change Avatar</button>
            ) }
        </>
    )
}

export default ImageAvatar