import React from 'react'



const Filter = () => {

    const [curDate, setCurDate] = React.useState(new Date())

    const [calendar, setCalendar] = React.useState<number[][][]>([])

    const [activeDate, setActiveDate] = React.useState({start: [0, 0], finish: [0, 0], clicked: 0})

    React.useEffect(() => {
        let beginSpaces = new Date(curDate.getFullYear(), curDate.getMonth(), 0).getDay()
        let daysInMouth = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getDate()
        let daysInPrevMouth = new Date(curDate.getFullYear(), curDate.getMonth(), 0).getDate()

        let NewCalendar: number[][] = []

        for (let i = 0; i < beginSpaces + daysInMouth; i++) {
            if (i < beginSpaces) {
                NewCalendar.push([daysInPrevMouth - beginSpaces + i + 1, 1])
                continue
            }
            NewCalendar.push([i - beginSpaces + 1, 0])
        }

        let daysAfter = 7 - (NewCalendar.length % 7)
        
        for (let i = 0; i < daysAfter; i++) {
            NewCalendar.push([i + 1, 1])
        }

        

        let size = 7;
        let readyCalendar = [];
        for (let i = 0; i <Math.ceil(NewCalendar.length/size); i++){
            readyCalendar[i] = NewCalendar.slice((i*size), (i*size) + size);
        }

        setCalendar(readyCalendar)
    }, [curDate])

    const handleMonth = (sign: string) => {
        let date = new Date()
        setCurDate(new Date(date.getFullYear(), sign == '+' ? curDate.getMonth() + 1 : curDate.getMonth() - 1))
    }

    const handleSetStyleDate = (date: number[]) => {
        if (date[0] === activeDate.start[0] && date[1] === 0) return '8px'
        else if (date[0] === activeDate.finish[0] && date[1] === 0) return '8px'
        else return '0px'
    }

    const handleChangeActiveDate = (date: number[]) => {
        if (date[1] === 1) return    
        if (activeDate.clicked === 0) {
            setActiveDate(prev => ({start: date[0], finish: date[0], clicked: prev.clicked + 1}))
        }
        if (activeDate.clicked === 1) {
            setActiveDate(prev => ({...prev, finish: date[0], clicked: 0}))
        }
    }

    React.useEffect(() => {
        console.log(activeDate)
    }, [activeDate])

    return (
        <div className='absolute top-10 w-full flex flex-col border rounded-xl z-20 bg-navbar-light dark:bg-navbar-dark'>
            <div className='flex justify-center items-center p-2'>
                <p>sort by: </p>
                <button className='flex items-center h-full justify-center w-5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>ey</button>
                <button className='flex items-center h-full justify-center w-5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>da</button>
            </div>
            <span className='border-t'></span>
            <div className='flex flex-col p-2'>
                <div className='flex gap-2 justify-center items-center'>
                    <button onClick={() => handleMonth('-')} className='flex items-center h-full justify-center w-5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>{'<'}</button>
                    <p className='text-center'>{(`${curDate.getMonth() + 1}`).length == 2 ? `${curDate.getMonth() + 1}` : `0${curDate.getMonth() + 1}`} {curDate.getFullYear()}</p>
                    <button onClick={() => handleMonth('+')} className='flex items-center h-full justify-center w-5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>{'>'}</button>
                </div>
                <table className='flex flex-col'>
                    <thead className='flex flex-col justify-between'>
                        <tr className='flex justify-between'>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>m</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>t</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>w</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>t</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>f</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>s</th>
                            <th className='text-center h-full justify-center w-8 rounded-lg'>s</th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col'>
                        { calendar.map((item, i) => (
                            <tr className='flex justify-between mt-1'>
                                { calendar[i].map((number) => (
                                    <td onClick={() => handleChangeActiveDate(number)} 
                                        className='flex p-1 cursor-pointer text-center h-full justify-center w-8 rounded-lg hover:bg-slate-100 dark:hover:bg-[#333333] duration-75' 
                                        style={{borderWidth: (activeDate.start <= number[0] && number[1] === 0) && (activeDate.finish >= number[0] && number[1] === 0) ? '1px' : '0px'}}
                                        >
                                            <p style={{opacity: number[1] == 1 ? '50%' : '100%'}}>{ number[0] }</p>
                                    </td>
                                )) }
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Filter