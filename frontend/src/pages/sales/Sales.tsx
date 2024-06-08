import ProductList from './ProductList'
import Measures from './Measures'
import Order from './Order'
import Sell from './Sell'
import PaymentMethods from './PaymentMethos'
import Clients from './Clients'
import { RiArchiveLine } from 'react-icons/ri'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Button } from '@nextui-org/react'
import Context from './context'
import { useState } from 'react'

export default function Sales() {
  

  return (
    <Context>
      <section className="grid grid-cols-[480px,min-content,min-content] gap-12">
        <ProductList />

        {/* <div className="grid grid-cols-[480px,max-content,1fr] gap-8"> */}
        <div className="flex flex-col gap-4">
          <Measures />
          <Order />

          <Sell />
          <PaymentMethods />
          <div className="grid grid-cols-2 justify-center gap-4 ">
            <Button
              className="font-medium"
              color="danger"
              endContent={<RiDeleteBin5Line size={'1.5rem'} />}
            >
              Borrar
            </Button>
            <Button
              className="font-medium"
              color="primary"
              endContent={<RiArchiveLine size={'1.5rem'} />}
            >
              Guardar
            </Button>
          </div>
        </div>

        <Clients />
        {/* </div> */}
      </section>
    </Context>
  )
}
