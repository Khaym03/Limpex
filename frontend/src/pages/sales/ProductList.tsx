import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  ButtonGroup,
  Button
} from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { TbBottleFilled } from 'react-icons/tb'
import { Ctx } from './context'
import { Product } from '../../types'

const listOfProducts: Product[] = [
  {
    id: 1,
    name: 'ariel',
    price: 34,
    color: 'text-blue-400'
  },
  {
    id: 2,
    name: 'cera',
    price: 28,
    color: 'text-default-400'
  },
  {
    id: 3,
    name: 'cloro',
    price: 20,
    color: 'text-default-400'
  },
  {
    id: 4,
    name: 'desengrasante',
    price: 40,
    color: 'text-orange-400'
  },

  {
    id: 5,
    name: 'desinfectante',
    price: 21,
    color: 'text-danger-400'
  },
  {
    id: 6,
    name: 'lavaplatos',
    price: 34,
    color: 'text-success-400'
  },
  {
    id: 7,
    name: 'shampoo',
    price: 45,
    color: 'text-default-400'
  },
  {
    id: 8,
    name: 'suavizante',
    price: 27,
    color: 'text-purple-400'
  },
  {
    id: 9,
    name: 'limpia poceta',
    price: 28,
    color: 'text-yellow-400'
  }
]

const hoverColor = (p: Product): string => {
  const twClass = p.color.split('-'),
    hue = 200

  twClass[0] = 'bg'
  twClass[2] = hue.toString()

  return `${twClass.join('-')}`
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [show, setShow] = useState(false)
  const { selectedProduct, setSelectedProduct } = useContext(Ctx)

  const handleAddSpecificQuantity = (
    event: React.MouseEvent,
    quantity: number
  ) => {
    event.stopPropagation()
    const { id, price } = product

    console.log({
      productId: id,
      quantity,
      price
    })
  }

  const isSelected = selectedProduct?.name === product.name

  const handleSelection = () => {
    if (isSelected) {
      setSelectedProduct(null)
      return
    }
    setSelectedProduct(product)
  }

  const color = [
    'bg-blue-200',
    'bg-orange-200',
    'bg-danger-200',
    'bg-success-200',
    'bg-purple-200',
    'bg-yellow-200'
  ]
  return (
    <Card
      isPressable
      shadow="none"
      onPress={handleSelection}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={`${isSelected ? hoverColor(product) : 'bg-default-50'}`}
    >
      <CardBody className="overflow-visible p-0 relative">
        <div
          className={`h-full flex flex-col gap-4 justify-center py-6 items-center ${
            isSelected ? 'text-black' : product.color
          }`}
        >
          <section
            className={`absolute top-0 w-full text-small font-medium transition-transform-opacity ${
              show ? '' : 'pointer-events-none scale-75 opacity-0'
            }`}
          >
            <div className="absolute text-black top-0 w-full h-12 grid grid-cols-2 ">
              {[500, 1000].map((quantity, i) => (
                <Card
                  key={i}
                  isPressable
                  onClick={event => handleAddSpecificQuantity(event, quantity)}
                  className={`grid place-items-center bg-transparent hover:bg-black-50 transition-colors rounded-none shadow-none `}
                >
                  {`${quantity / 1000} Lt`}
                </Card>
              ))}
            </div>
          </section>

          <TbBottleFilled className="mt-10" size={'2rem'} />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-start flex-col">
        <div className=" text-medium capitalize font-medium">{product.name}</div>
        <div className=" font-semibold ml-2 text-default-700 italic">{`${product.price} Bs`}</div>
      </CardFooter>
    </Card>
  )
}

export default function ProductList() {
  return (
    <ul className="grid grid-cols-3 grid-rows-3 auto-rows-fr gap-4 w-[480px]">
      {listOfProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ul>
  )
}
