'use client'
import React, { useEffect, useState } from 'react'
import { Friend } from '../Friend/Friend';


export const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
            });
    }, []);

    // console.log(friends);
    return (
        <div className='lg:max-w-4/6 max-w-[90%] mx-auto lg:pb-10'>
            <h4 className='font-bold text-2xl pb-4'>Your Friends</h4>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
            {
                friends.map(friend=>
                    <Friend key={friend.id} friend={friend}></Friend>
                )
            }
            </div>
        </div>
    )
}
