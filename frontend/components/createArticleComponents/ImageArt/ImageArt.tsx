'use client'
import React from 'react'


const ImageArt = () => {
    const input = React.useRef<HTMLInputElement>(null)

    const [height, setHeight] = React.useState(60)
    const [text, setText] = React.useState('Drop here or click to pick')

    const [file, setFile] = React.useState<File>()

    const handleDragEnter = (e: React.DragEvent) => {
        setText('Drop Here')
        setHeight(90)
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDragLeave = (e: React.DragEvent) => {
        setText('Drop here or click to pick')
        setHeight(60)
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDragOver = (e: React.DragEvent) => {
        setText('Drop Here')
        setHeight(90)
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e: React.DragEvent) => {
        setFile(e.dataTransfer.files?.[0])
        setText('File:\t')
        setHeight(60)
        e.preventDefault();
        e.stopPropagation();
    }

    const handleClickPick = () => {
        input.current?.click()
        setText('File:\t')
    }
    
    return (
        <div style={{height: height}} onClick={handleClickPick} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop} className='w-full flex border rounded-lg bg-slate-100 dark:bg-[#333333] justify-center items-center cursor-pointer'>
            <p className='text-[#9CA3AF]'>{ text }</p>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.currentTarget.files?.[0])} ref={input} className='hidden' type="file" />
            <div className='flex'>
                <p>{ file?.size ? file?.name + ', ' + (file?.size / 1024).toFixed(2) + ' kb' : '' }</p>
            </div>
        </div>
    )
}

export default ImageArt