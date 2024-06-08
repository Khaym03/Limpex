import { useState } from 'react'
import logo from './assets/images/logo-universal.png'
import { Greet } from '../wailsjs/go/main/App'
import { Card, CardBody } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Owes from './pages/owes/Owes';
import Sales from './pages/sales/Sales';

function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  )
  const [name, setName] = useState('')
  const updateName = (e: any) => setName(e.target.value)
  const updateResultText = (result: string) => setResultText(result)

  function greet() {
    Greet(name).then(updateResultText)
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Sales/> },
        { path: '/owes', element: <Owes /> }
        // Add more routes as needed
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
