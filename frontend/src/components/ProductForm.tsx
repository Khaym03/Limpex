import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaCircle } from 'react-icons/fa6'
import { ColorLookupType, ProdBgColor, ProdFields } from '../types'

const colorLookup: ColorLookupType = {
  'bg-blue-400': 'text-blue-400',
  'bg-default-400': 'text-default-400',
  'bg-orange-400': 'text-orange-400',
  'bg-danger-400': 'text-danger-400',
  'bg-success-400': 'text-success-400',
  'bg-purple-400': 'text-purple-400',
  'bg-yellow-400': 'text-yellow-400'
}

const prodBgColors: ProdBgColor[] = [
  'bg-blue-400',
  'bg-default-400',
  'bg-orange-400',
  'bg-danger-400',
  'bg-success-400',
  'bg-purple-400',
  'bg-yellow-400'
]

export default function ProductForm() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const [selectedColor, setSelectedColor] = useState('')
  const [prodName, setProdName] = useState('')
  const [prodPrice, setProdPrice] = useState(0)

  const [isValidName, setIsValidName] = useState(true)
  const [isValidPrice, setIsValidPrice] = useState(true)
  const [isValidColor, setIsValidColor] = useState(true)

  // Track user interactions
  const [hasInteractedWithName, setHasInteractedWithName] = useState(false)
  const [hasInteractedWithPrice, setHasInteractedWithPrice] = useState(false)
  const [hasInteractedWithColor, setHasInteractedWithColor] = useState(false)

  useEffect(() => {
    const validateFields = () => {
      let isValidName = hasInteractedWithName || prodName.trim() !== ''
      let isValidPrice = hasInteractedWithPrice || prodPrice > 0
      let isValidColor = hasInteractedWithColor || selectedColor !== ''

      setIsValidName(isValidName)
      setIsValidPrice(isValidPrice)
      setIsValidColor(isValidColor)
    }

    validateFields()
  }, [
    prodName,
    prodPrice,
    selectedColor,
    hasInteractedWithName,
    hasInteractedWithPrice,
    hasInteractedWithColor
  ])

  const handleInputChange = (field: ProdFields, value: any) => {
    switch (field) {
      case 'name':
        setProdName(value)
        setHasInteractedWithName(true)
        break
      case 'price':
        setProdPrice(value)
        setHasInteractedWithPrice(true)
        break
      case 'color':
        setSelectedColor(value)
        setHasInteractedWithColor(true)
        break
      default:
        break
    }
  }

  const handleClick = () => {
    let isValidName = prodName.trim() !== ''
    let isValidPrice = prodPrice > 0
    let isValidColor = selectedColor !== ''

    if (!isValidName || !isValidPrice || !isValidColor) {
      setIsValidName(isValidName)
      setIsValidPrice(isValidPrice)
      setIsValidColor(isValidColor)
      return
    }
    console.log({
      prodName,
      prodPrice,
      selectedColor
    })
    onClose()
  }

  useEffect(() => {
    // cleanup the states
    setSelectedColor('')
    setProdName('')
    setProdPrice(0)

    setIsValidName(true)
    setIsValidPrice(true)
    setIsValidColor(true)
  }, [isOpen])

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Crear producto
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Datos del Producto
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  isInvalid={!isValidName}
                  errorMessage={isValidName ? '' : 'el nombre es requerido.'}
                  autoFocus
                  label="Nombre"
                  placeholder="Ingrese el nombre del producto"
                  variant="bordered"
                  onChange={e => handleInputChange('name', e.target.value)}
                />
                <Input
                  isRequired
                  isInvalid={!isValidPrice}
                  errorMessage={isValidPrice ? '' : 'el precio es requerido.'}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-large">$</span>
                    </div>
                  }
                  label="Precio $"
                  placeholder="Ingrese el precio al mayor"
                  type="number"
                  variant="bordered"
                  onChange={e => {
                    const n = +e.target.value
                    if (isNaN(n)) return

                    handleInputChange('price', n)
                  }}
                />
                <Select
                  isRequired
                  isInvalid={!isValidColor}
                  errorMessage={isValidColor ? '' : 'el color es requerido.'}
                  label="Color asociado al producto"
                  placeholder="Selecciona un color"
                  startContent={
                    <FaCircle className={selectedColor} size={'1.5rem'} />
                  }
                >
                  {prodBgColors.map((color, i) => (
                    <SelectItem
                      key={i}
                      onPress={() => {
                        const newColor = colorLookup[color]

                        handleInputChange('color', newColor)
                      }}
                    >
                      {color.split('-')[1]}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  cerrar
                </Button>
                <Button color="primary" onPress={handleClick}>
                  crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
