import { FriendContext } from '@/context/FriendProvider';
import Link from 'next/link'
import React, { useContext } from 'react'

export const Friend = ({friend}) => {
//   console.log(friend);
    const {active, setActive} = useContext(FriendContext);
    const handleCard = () =>{
        setActive('');
    }
    return (
    <Link href={`/friend/${friend.id}`} className='p-8 bg-white rounded-2xl text-center shadow-sm' onClick={()=>handleCard()}>
            <div className='overflow-hidden max-w-[100] h-[100] rounded-full mx-auto mb-3' >
            <img src={friend.picture} alt="" />
            </div>
            <h3 className='font-bold text-3xl pb-3.5'>{friend.name}</h3>
            <p className='text-gray-500 pb-2.5'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-2 justify-center pb-2'>
                {
                    friend.tags.map((tag,ind)=>
                        <div key={ind} className="badge badge-soft bg-[#CBFADB] rounded-full text-black">{tag}</div>
                    )
                }
            </div>
            <div className={`"badge badge-soft inline-block px-4 ${friend.status === 'overdue' ? 'bg-red-700' : friend.status === 'almost due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'} rounded-full text-white "`}>{friend.status}</div>
        </Link>
  )
}
