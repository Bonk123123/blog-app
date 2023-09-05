import React from 'react'
import "../app/globals.css"

const Loading = () => {
  return (
    <span className='flex w-full h-full justify-center items-center'>
      <span className="loader border-navbar-dark"></span>
    </span>
  )
}

export default Loading