import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { RiHome4Line } from 'react-icons/ri'
import { RiBook2Line } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

type NavInfo = {
  title: string
  description?: string
}

const NavTitle = ({ title, description }: NavInfo) => {
  return (
    <div className="flex flex-col justify-start px-4 py-2 pointer-events-none">
      <span className="text-xs font-bold text-sky-600 uppercase">{title}</span>
      {description && (
        <span className="text-xs text-slate-500 font-medium">
          {description}
        </span>
      )}
    </div>
  )
}

type NavItem = {
  name: string
  url: string
  Icon: IconType
}

const NavigationItems = ({ items }: { items: NavItem[] }) => {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState('/')

  useEffect(() => {
    // Determine the active item based on the current URL
    const matchedItem = items.find(item => location.pathname === item.url)
    if (matchedItem) {
      setActiveItem(matchedItem.name)
    }
  }, [location])

  return (
    <ul className="px-4 gap-2 grid">
      {items.map(({ name, url, Icon }) => (
        <li key={name}>
          <NavLink
            to={url}
            className={`z-0 group relative inline-flex items-center justify-start box-border appearance-none select-none whitespace-nowrap font-medium subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover w-full capitalize hover:bg-slate-100 ${
              activeItem === name
                ? 'bg-slate-100 text-slate-700'
                : 'bg-white text-slate-600'
            }`}
          >
           
            <Icon size={'1.5rem'} />
            <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default function NextUINavbar() {
  const items: NavItem[] = [
    {
      name: 'compras',
      url: '/',
      Icon: RiHome4Line
    },
    {
      name: 'deudas',
      url: '/owes',
      Icon: RiBook2Line
    }
  ]

  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
  // return (
  //   <nav className="absolute top-0 left-0 h-full w-72  border-l-1">
  //     <NavTitle title={'menu'} />
  //     <NavigationItems items={items} />
  //   </nav>
  // )
}
