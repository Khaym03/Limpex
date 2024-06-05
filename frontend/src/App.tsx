import { useState } from 'react'
import logo from './assets/images/logo-universal.png'
import { Greet } from '../wailsjs/go/main/App'
import { Card, CardBody } from '@nextui-org/react'

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

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-100">
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </div>
  )
}

export default App
