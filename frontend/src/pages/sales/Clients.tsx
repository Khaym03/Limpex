import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ScrollShadow,
  Card
} from '@nextui-org/react'
import { RiSearch2Line } from 'react-icons/ri'
import { RiUserAddLine } from 'react-icons/ri'
import { RiUserLine } from 'react-icons/ri'
import { RiAddFill } from 'react-icons/ri'
import { TbAdjustments } from 'react-icons/tb'
import { RiDeleteBin5Line } from 'react-icons/ri'


export default function Clients() {
  const clients = [
    {
      name: 'mario',
      owe: true
    },
    {
      name: 'mario',
      owe: true
    },
    {
      name: 'mario',
      owe: true
    },
    {
      name: 'mario',
      owe: true
    },
    {
      name: 'mario',
      owe: true
    },
    {
      name: 'pepe',
      owe: false
    },
    {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
      {
        name: 'pepe',
        owe: false
      },
  ]

  return (
    <section className="flex flex-col gap-4">
      <header className="flex gap-4 w-80">
        <Input
          type="text"
          placeholder="Buscar cliente"
          labelPlacement="outside"
          startContent={
            <RiSearch2Line className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Button color="primary" className="font-medium">
          <RiUserAddLine size={'1.25rem'} />
        </Button>
      </header>
      {/* Client list  */}
      <ScrollShadow hideScrollBar className="grid auto-rows-min gap-2 h-[597px] overflow-y-auto">
        {clients.map((c,i) => (
          <Dropdown key={i} backdrop="blur">
            <DropdownTrigger>
              <Button
                className="bg-content2 flex justify-between"
                startContent={
                  <div className="flex gap-2">
                    <RiUserLine size="1.25rem" />
                    <div>{c.name}</div>
                  </div>
                }
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="new"
                startContent={<RiAddFill size="1.5rem" />}
                description="Se le asigna la orden actual"
              >
                Agregar
              </DropdownItem>
              <DropdownItem
                key="copy"
                startContent={<TbAdjustments size="1.5rem" />}
                description="Manipulas los datos de este cliente"
              >
                Editar
              </DropdownItem>
              <DropdownItem
                key="delete"
                startContent={<RiDeleteBin5Line size="1.5rem" />}
                description="Borra permanentemente este cliente"
                className="text-danger"
                color="danger"
              >
                Borrar
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ))}
      </ScrollShadow>
    </section>
  )
}
