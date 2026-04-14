import React from 'react'

export const Friend = ({friend}) => {
//   console.log(friend);
    return (
    <div className='p-8 bg-white rounded-2xl text-center'>
            <h3 className='font-bold text-3xl pb-3.5'>{friend.name}</h3>
            <div className='flex gap-2'>
                {
                    friend.tags.map((tag,ind)=>
                        <div key={ind} className="badge badge-soft bg-[#CBFADB] rounded-full text-black">{tag}</div>
                    )
                }
            </div>
            <div className="badge badge-soft bg-red-700 rounded-full text-white">{friend.status}</div>
        </div>
  )
}
