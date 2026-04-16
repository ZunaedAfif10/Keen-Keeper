import React from 'react'

export const Info = () => {
  return (<>
    <div className='pt-10 max-w-4/6 grid lg:grid-cols-4 gap-6 mx-auto text-center'>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>10</h3>
            <p className='text-gray-500'>Total Friends</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>3</h3>
            <p className='text-gray-500'>On Track</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>6</h3>
            <p className='text-gray-500'>Need Attention</p>
        </div>
        <div className='p-8 bg-white rounded-2xl'>
            <h3 className='font-bold text-3xl pb-3.5'>12</h3>
            <p className='text-gray-500'>Interactions This Month</p>
        </div>
    </div>
    <hr className='max-w-4/6 border border-gray-200 mx-auto lg:my-10' />
  </>
  )
}
