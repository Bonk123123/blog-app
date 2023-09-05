'use client'
import React from 'react'


const CanvasArt = () => {
  const canvasRef = React.useRef(null)

  const [activeWidth, setActiveWidth] = React.useState(0)
  const [activeColor, setActiveColor] = React.useState(0)

  React.useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    const WIDTH = canvas.offsetWidth * 2
    const HEIGHT = canvas.offsetHeight * 2
    
    const RATIO_WIDTH = WIDTH / canvas.offsetWidth
    const RATIO_HEIGHT = HEIGHT / canvas.offsetHeight

    

    canvas.width = WIDTH
    canvas.height = HEIGHT

    if (ctx) {

      let mouse = { x:0, y:0 }
      let draw = false
      
      
      canvas.addEventListener("mousedown", function(e){
        mouse.x = e.offsetX * RATIO_WIDTH
        mouse.y = e.offsetY * RATIO_HEIGHT
        draw = true
        ctx.beginPath()
        ctx.moveTo(mouse.x, mouse.y)
      })
      
      canvas.addEventListener("mousemove", function(e){
        if(draw==true){
          mouse.x = e.offsetX * RATIO_WIDTH
          mouse.y = e.offsetY * RATIO_HEIGHT
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      })
      
      canvas.addEventListener("mouseup", function(e){
        ctx.stroke()
        ctx.closePath()
        draw = false
      })
    }
    
  }, [])

  const handleClear = () => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    ctx?.clearRect(0, 0, canvas.width, canvas.height)
  }

  const handleChangeColor = (color: string) => {
    if (color == 'black') setActiveColor(0)
    if (color == 'blue') setActiveColor(1)
    if (color == 'white') setActiveColor(2)
    if (color == 'green') setActiveColor(3)
    if (color == 'red') setActiveColor(4)
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    if (ctx) {  
      ctx.strokeStyle = color
    } 
  }

  const handleChangeLineWidth = (lineWidth: number) => {
    if (lineWidth == 1) setActiveWidth(0)
    if (lineWidth == 2) setActiveWidth(1)
    if (lineWidth == 5) setActiveWidth(2)
    if (lineWidth == 10) setActiveWidth(3)
    if (lineWidth == 20) setActiveWidth(4)
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    if (ctx) {  
      ctx.lineWidth = lineWidth
    } 
  }

  return (
    <div className='w-full flex gap-2'>
      <canvas ref={canvasRef} className='h-48 w-[85%] bg-white sm:h-72 lg:h-[20rem] xl:h-[25rem] border rounded-lg'></canvas>
      <div className='w-[15%] flex flex-col gap-2'>
        <button onClick={handleClear} className='p-1 border rounded-xl w-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>Clear</button>
        <div className='w-full flex justify-center items-center gap-2'>
          <div className='w-50% flex flex-col gap-2 justify-center items-center'>
            <button style={{ borderWidth: activeColor == 0 ? '4px' : '1px' }} onClick={() => handleChangeColor('black')} className='flex border rounded-full w-5 h-5 sm:w-8 sm:h-8 bg-black duration-75'></button>
            <button style={{ borderWidth: activeColor == 1 ? '4px' : '1px' }} onClick={() => handleChangeColor('blue')} className='flex border rounded-full w-5 h-5 sm:w-8 sm:h-8 bg-blue-700 duration-75'></button>
            <button style={{ borderWidth: activeColor == 2 ? '4px' : '1px' }} onClick={() => handleChangeColor('white')} className='flex border rounded-full w-5 h-5 sm:w-8 sm:h-8 bg-white duration-75'></button>
            <button style={{ borderWidth: activeColor == 3 ? '4px' : '1px' }} onClick={() => handleChangeColor('green')} className='flex border rounded-full w-5 h-5 sm:w-8 sm:h-8 bg-green-700 duration-75'></button>
            <button style={{ borderWidth: activeColor == 4 ? '4px' : '1px' }} onClick={() => handleChangeColor('red')} className='flex border rounded-full w-5 h-5 sm:w-8 sm:h-8 bg-red-700 duration-75'></button>
          </div>
          <div className='w-50% flex flex-col gap-2 justify-center items-center'>
            <button style={{ borderWidth: activeWidth == 0 ? '4px' : '1px' }} onClick={() => handleChangeLineWidth(1)} className='text-center text-xs sm:text-base border rounded-full w-5 h-5 sm:w-8 sm:h-8 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>1</button>
            <button style={{ borderWidth: activeWidth == 1 ? '4px' : '1px' }} onClick={() => handleChangeLineWidth(2)} className='text-center text-xs sm:text-base border rounded-full w-5 h-5 sm:w-8 sm:h-8 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>2</button>
            <button style={{ borderWidth: activeWidth == 2 ? '4px' : '1px' }} onClick={() => handleChangeLineWidth(5)} className='text-center text-xs sm:text-base border rounded-full w-5 h-5 sm:w-8 sm:h-8 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>5</button>
            <button style={{ borderWidth: activeWidth == 3 ? '4px' : '1px' }} onClick={() => handleChangeLineWidth(10)} className='text-center text-xs sm:text-base border rounded-full w-5 h-5 sm:w-8 sm:h-8 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>10</button>
            <button style={{ borderWidth: activeWidth == 4 ? '4px' : '1px' }} onClick={() => handleChangeLineWidth(20)} className='text-center text-xs sm:text-base border rounded-full w-5 h-5 sm:w-8 sm:h-8 hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>20</button>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default CanvasArt