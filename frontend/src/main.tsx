import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './input.css'
import './output.css'
import { NextUIProvider } from '@nextui-org/react'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <NextUIProvider className='h-screen'>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
