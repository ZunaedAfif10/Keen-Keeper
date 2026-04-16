'use client'
import React, { createContext, useState } from 'react'

export const FriendContext = createContext()

export default function FriendProvider({children}) {
  const [active, setActive] = useState('home');
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const data = {
    active,
    setActive,
    users,
    setUsers,
    allUsers,
    setAllUsers
  }
  return (
    <FriendContext.Provider value={data}>
      {children}
    </FriendContext.Provider>
  )
}

