import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-bootstrap';

const Navibar = () => {
    const state = useSelector((state) => state.handleCart)

    // const [items, setItem] = useState("")
    // const [searchValue, setSearchValue] = useState("")

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((data) => setItem(data))
    // }, [])

    // function changingSearcData(e) {
    //     setSearchValue(e.target.value)
    // }

  return (
    <div className='NavBar'>
          <Navbar bg="light" expand="lg" fixed='top' className='navi shadow sm p-3 mb-5 bg-white rounded'>
              <Container>
                  <Navbar.Brand href="/">AlexShop</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                      <Nav
                          className="mx-auto my-2 my-lg-0"
                        //   style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/products">Product</Nav.Link>
                          <Nav.Link href="/about">About us</Nav.Link>
                      </Nav>
                      <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            //   products={items}
                            //   value={searchValue}
                            //   onClick = {changingSearcData}
                          />
                          <Button variant='outline-dark' href='/cart'><AiOutlineShoppingCart />Cart({state.length})</Button>
                      </Form>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </div>
  )
}

export default Navibar