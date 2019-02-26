import React from 'react'

export const SizeContext = React.createContext({
  width: window.innerWidth,
  height: window.innerHeight,
})
