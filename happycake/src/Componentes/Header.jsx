import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="danger" variant="danger">
    <Container className="justify-content-start">
      <Navbar.Brand>Happy Cake 🥧</Navbar.Brand>
      <Link to="/" className="text-black ms-3 text-decoration-none">
         Home 🏠
      </Link>
     <Link to="/contacto" className="text-black ms-3 text-decoration-none">
        Contacto 📒
    </Link>
     
    </Container>
  </Navbar>
  )
}

export default Header