'use client'
import { FriendContext } from '@/context/FriendProvider'
import React, { useContext, useEffect } from 'react'
import { FaAngleDown } from 'react-icons/fa';

export default function page() {
    const { users, setUsers, allUsers, setAllUsers } = useContext(FriendContext);
    // console.log(users);
    useEffect(() => {
        setUsers(allUsers);
    }, []);
    console.log(allUsers)
    const handleFilter = (par) => {
        const filtered = allUsers.filter(user => user.Type === par);
        setUsers(filtered);
    }
    return (
        <div className='lg:max-w-4/6 mx-auto w-full pb-10'>
            <h1 className='font-bold text-4xl pb-6 '>Timeline</h1>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 text-gray-500">Filter timeline <FaAngleDown className='ml-14' /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={() => handleFilter('Call')}>Call</button></li>
                    <li><button onClick={() => handleFilter('Text')}>Text</button></li>
                    <li><button onClick={() => handleFilter('Video')}>Video</button></li>
                </ul>
            </div>
            {
                users.map((user, ind) =>
                    <div key={ind} className='my-6 bg-white p-4 flex gap-3 items-center'>
                        <img src={user.Type === 'Text' ? '/assets/text.png' : user.Type === 'Video' ? '/assets/video.png' : '/assets/call.png'} alt="" />
                        <div>
                            <h2 className='text-gray-500'>
                                <span className='text-black text-[1.2rem]'>{user.Type}</span> with {user.Name}
                            </h2>
                            <p className='text-gray-500 text-[0.97rem] pt-1'>{user.Date}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
