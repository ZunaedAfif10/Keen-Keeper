import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className='text-center'>
        <h2 className='font-extrabold text-5xl lg:pb-4'>Friends to keep close in your life</h2>
        <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
relationships that matter most.</p>
        <button className='btn bg-green-900 text-white lg:mt-8'><FaPlus />Add a Friend</button>
    </div>
  )
}
