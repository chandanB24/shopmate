import React from 'react'
import { Navbar } from 'flowbite-react'

export default function Navbr() {
  return (
    <Navbar
    fluid
    rounded
    className='bg-white'
  >
    <Navbar.Brand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white p-1">
        Shopmate
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/">Home</Navbar.Link>
      <Navbar.Link href="/">About us</Navbar.Link>
      <Navbar.Link href="/">Contact</Navbar.Link>
      <Navbar.Link href="auth" active>Login</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}
