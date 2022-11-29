import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, } from 'reactstrap'
import './navbar.scss'

const NavBar = ( className ) => {
  const [isOpen, setIsOpen] = useState(false);

  const signOut = () => {
      window.localStorage.removeItem("userData")
      window.localStorage.removeItem("isAuthed")
      window.localStorage.removeItem("token")
      window.location.href = "/"
  }

  return (
    <div className="d-block t-w-550 t-p-30">
      <Navbar dark expand="md" fixed="top">
          <NavbarBrand href="/explore">MYLIB</NavbarBrand>
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse className="" isOpen={isOpen} navbar>
            <Nav className="pl-2 mx-auto" navbar>
              <NavItem className="md:ml-10">
                <NavLink href="/explore">Explore</NavLink>
              </NavItem>
              <NavItem className="md:ml-10">
                <NavLink href="/mylibrary">My Library</NavLink>
              </NavItem>
              <NavItem className="md:ml-10">
                <NavLink href="/reading-stats">Reading Stats</NavLink>
              </NavItem>
            </Nav>
            <Button className="t-mt-1 hover:t-bg-[#C7930E]" onClick={signOut}>Sign Out</Button>
          </Collapse>
      </Navbar>
  </div >
  )
}

export default NavBar