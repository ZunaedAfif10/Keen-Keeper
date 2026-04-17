import Link from 'next/link'
import React from 'react'

export default function notfound() {
    return (
    <div className='h-[700] flex justify-center items-center flex-col'>
        <h1 className='font-extrabold text-9xl text-center pb-10'>404</h1>
        <p className='text-center text-5xl'>There's NOTHING here</p>
        <Link href='/' className='bg-blue-500 px-10 py-2 rounded-2xl mt-10 text-5xl hover:bg-blue-600 active:scale-95 transition'>Back To Home</Link>
    </div>
  )
}
