'use client'
import React from 'react'
import Image from 'next/image'
import img_fill from '../../public/img_fill.svg'
import { useRouter } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
dayjs.extend(calendar)

interface props {
    id: number
    title: string
    views: number
    createdAt: string
    author: string
    authorImg?: string
    img?: string
}

const ArticleCard = ({ id, title, views, createdAt, author, authorImg, img } : props) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/${id}`)} className='w-full h-96 sm:h-64 border p-2 rounded-xl flex flex-col justify-center items-center shadow cursor-pointer hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>
            
            <div className='flex justify-center gap-3 text-sm h-[10%] w-full text-[#939393]'>
                    { authorImg ? 
                    (
                        <Image className='w-1/4 flex h-full rounded-full' src={authorImg} alt="" />
                    ) 
                    : 
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image w-1/4 flex h-full rounded-full" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/> </svg>
                    ) }
                    
                    <p className='w-3/4 flex justify-start items-center'>{author}</p>
                </div>

            { img? 
            (
                <Image className='w-full h-1/2' src={img} alt={''}/>
            ) 
                : 
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image w-full h-1/2" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/> </svg>
            )
            }
            
            <div className='w-[80%] h-1/2 flex flex-col gap-3 overflow-hidden justify-between'>
                <h1 className='text-center h-2/4 text-2xl sm:text-sm w-full break-words'>
                    {title.length < 54 ? title : title.slice(0, 51) + '...'}
                </h1>

                <div className='flex justify-between text-xs h-1/4 text-[#939393]'>
                    <p className='flex gap-1'>
                        { img? 
                        (
                            <Image src={img} alt="" />
                        ) 
                        : 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
                        ) }
                        
                        {views}
                    </p>

                    <p>
                        {dayjs().calendar(dayjs(createdAt))}
                    </p>
                </div>

                

                
                
            </div>
            
        </div>
    )
}

export default ArticleCard