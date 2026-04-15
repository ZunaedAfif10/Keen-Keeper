'use client'
import React, { createContext } from 'react'

export const FriendContext = createContext()

export default function FriendProvider({children}) {
  const data = {
    Name : 'Afif',
    roll : 2
  }
  return (
    <FriendContext.Provider value={data}>
      {children}
    </FriendContext.Provider>
  )
}

