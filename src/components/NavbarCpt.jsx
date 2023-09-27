'use client';

//Components Flowbite
import { Navbar } from 'flowbite-react';

//Imgs
import logo from '../assets/img/clothes_logo.png';

export default function Navigation() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        href="/"
      >
        <img src={logo} alt="Shein x Shoppink Logo" className="w-56" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Inicio
          </p>
        </Navbar.Link>
        <Navbar.Link href="/client">
          Outfits
        </Navbar.Link>
        <Navbar.Link href="/contact">
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


