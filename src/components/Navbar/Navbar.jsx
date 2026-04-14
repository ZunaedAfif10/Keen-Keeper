'use client'
import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { IoTimeOutline } from 'react-icons/io5'
import { TfiStatsUp } from 'react-icons/tfi'

export const Navbar = () => {
    const [active, setActive] = useState('home');
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start lg:pl-40">
                <a className="btn btn-ghost text-xl"><span className='font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span>
                </span>
                </a>
            </div>
            <div className="navbar-end lg:pr-40">
                <a className={`btn flex items-center gap-1 ${active === 'home' ? 'bg-green-900' : 'btn-ghost'}`} onClick={() => setActive('home')}>
                    <GoHome className={active === 'home' ? 'text-white text-xl' : 'text-gray-500'}></GoHome><span className={`${active === 'home' ? 'text-white' : 'text-gray-500'}`}>Home</span>
                </a>
                <a className={`btn flex items-center gap-1 ${active === 'timeline' ? 'bg-green-900' : 'btn-ghost'}`} onClick={() => setActive('timeline')}>
                    <IoTimeOutline className={active === 'timeline' ? 'text-white text-xl' : 'text-gray-500'}></IoTimeOutline><span className={`${active === 'timeline' ? 'text-white' : 'text-gray-500'}`}>Timeline</span>
                </a>
                <a className={`btn flex items-center gap-1 ${active === 'stats' ? 'bg-green-900' : 'btn-ghost'}`} onClick={() => setActive('stats')}>
                    <TfiStatsUp className={active === 'stats' ? 'text-white text-xl' : 'text-gray-500'}></TfiStatsUp><span className={`${active === 'stats' ? 'text-white' : 'text-gray-500'}`}>Stats</span>
                </a>
            </div>
        </div>
    )
}
