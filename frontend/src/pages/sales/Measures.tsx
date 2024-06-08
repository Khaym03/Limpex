import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Input,
  Button
} from '@nextui-org/react'
import { RiAddFill } from "react-icons/ri";

export default function Measures() {
  return (
    // <Card className="p-4 h-max flex flex-row">
    <div className="grid grid-cols-3 gap-4">
      <Input
        type="text"
        placeholder="Bolivares"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">Bs</span>
          </div>
        }
      />
      <Input
        type="text"
        placeholder="Mililitros"
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">Ml</span>
          </div>
        }
      />
      <Button color="primary" className='font-medium' endContent={<RiAddFill size={'1.5rem'}/>}>Agregar</Button>
    </div>

    // </Card>
  )
}
