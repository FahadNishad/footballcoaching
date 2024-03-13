import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({cardData}) => {
  return (
    
    <div  className='flex justify-center items-center flex-col w-[260px]  gap-4 shadow-lg'>
          <img src={cardData.image}  className='h-[226px] w-full'/>

          <div className='flex flex-col gap-1'>
            <h1 className='text-[25px] text-main-dark'>{cardData.heading}</h1>
            <p className='text-[15px]'>{cardData.content}</p>

            <div className='w-full flex justify-center items-center gap-[2px]'>
              <Link className='uppercase bg-main-dark text-white px-2 py-2 flex-1 text-center text-sm'>Quick Look</Link>
              <Link className='uppercase bg-[#B8B8B8] text-white px-2 py-2 flex-1 text-center text-sm'>Send Request</Link>
          
            </div>

          </div>
    </div>
  )
}

export default Card