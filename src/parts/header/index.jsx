import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Sling as Hamburger } from 'hamburger-react'

import '../../assets/scss/header.scss'

export const Header = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header">
      <Navbar className="navbar" collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
        <div className="menu-icon-wrapper">
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} onToggle={toggled => {
            props.menuToggle(toggled);
          }}/>
        </div>
        <Navbar.Brand href="#home" className="navbar-logo">PS-Board</Navbar.Brand>
        <FontAwesomeIcon icon={faSignInAlt} className="sign-in-icon"/>
      </Navbar>
    </div>
  )
}
