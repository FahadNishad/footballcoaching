import React from 'react'
import { Link } from 'react-router-dom'
import coahimg from '../../../assets/images/session_coach.png'
const SessionCard = ({data}) => {
  return (
    <div className='flex flex-col justify-between gap-3 p-3 border border-blue-gray-200 rounded-lg shadow-md w-[320px] h-[427px]'>
        <img src={data.img} alt="" className=' h-[180px]' /> 
        <h1 className='text-[20px] font-semibold'>{data.title}</h1>
        <p className='text-[15px] w-full font-[600]'>{data.name}</p>
        <p className='text-sm'>{data.disc}</p>

        <Link className='w-full text-center text-main-dark border border-main-dark py-2 rounded text-sm hover:bg-main-dark duration-200 hover:text-black'>Book Now</Link>
        
    </div>
  )
}

export default SessionCard