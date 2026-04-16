'use client'
import React, { createContext, useState } from 'react'

export const FriendContext = createContext()

export default function FriendProvider({children}) {
  const [active, setActive] = useState('home');
  const data = {
    active,
    setActive
  }
  return (
    <FriendContext.Provider value={data}>
      {children}
    </FriendContext.Provider>
  )
}

