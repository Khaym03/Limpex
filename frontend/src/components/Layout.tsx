import { Outlet } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { NavLink, useLocation } from 'react-router-dom'
import { TbBottleFilled } from 'react-icons/tb'
import ProductForm from './ProductForm'

const activeHandler = ({
  isActive,
  isPending
}: {
  isActive: boolean
  isPending: boolean
}) => (isActive ? 'text-primary' : isPending ? 'text-primary-600' : '')

export default function Layout() {
  return (
    <>
      <Navbar position="sticky" isBlurred={true} isBordered={true}>
        {/* <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Cleanup</p>
        </NavbarBrand> */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <NavLink color="foreground" to="/" className={activeHandler}>
              Compras
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink color="foreground" to="/owes" className={activeHandler}>
              Deudas
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Analisis
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}
          <NavbarItem>
          {/* <Dropdown backdrop="blur">
            <DropdownTrigger>
            <Button color="primary" href="#" variant="flat" className='font-medium'>
              Crear
            </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="new-product"
                startContent={<TbBottleFilled size="1.5rem" />}
                description="Crea un nuevo producto."
              >
                Nuevo producto
              </DropdownItem>    
            </DropdownMenu>
          </Dropdown> */}
          <ProductForm/>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
     

      <main className="relative overflow-hidden grid place-items-center font-sans">
        <Outlet />
      </main>
    </>
  )
}
