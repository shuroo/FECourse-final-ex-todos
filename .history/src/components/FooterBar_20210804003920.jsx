import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';

function FooterBar({setFilter}){


      return (
        <Navbar  > 
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <Nav.Link active onClick={setFilter("All")} href="#" >All </Nav.Link> 
      <Nav.Link onClick={setFilter("Active")} href="#">Active
         </Nav.Link>  
         <Nav.Link onClick={setFilter("Completed")} href="#" >Completed </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
         
      )
    
  }

  export default FooterBar;