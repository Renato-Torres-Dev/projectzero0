'use client'

import { Toaster as ToasterProvider } from 'react-hot-toast'

export const Toaster = () => {
  return (
    <ToasterProvider
      position='bottom-center'
      toastOptions={{
        success:{
          style:{
            background: "#48ff00",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#48ff00",
          },
        },
        error: {
          style: {
            background: "#ff003f",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ff003f",
          },
        },
      }}
    
    />
  )
}