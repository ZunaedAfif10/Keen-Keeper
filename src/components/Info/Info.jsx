import React from 'react'

export const Info = () => {
  return (<>
    <div className='lg:pt-10 pt-5 max-w-4/6 grid md:gap-6 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 mx-auto text-center'>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>10</h3>
            <p className='text-gray-500'>Total Friends</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>4</h3>
            <p className='text-gray-500'>On Track</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>3</h3>
            <p className='text-gray-500'>Need Attention</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>12</h3>
            <p className='text-gray-500'>Interactions This Month</p>
        </div>
    </div>
    <hr className='lg:max-w-4/6 border border-gray-200 mx-auto my-10' />
  </>
  )
}
