import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';

function FooterBar({filterBy,updateFilter}){

   
      return (
        <Navbar  > 
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <Nav.Link onClick={()=>updateFilter('All')} href="#" >All </Nav.Link> 
      <Nav.Link onClick={()=>updateFilter('Active')} href="#">Active
         </Nav.Link>  
         <Nav.Link onClick={()=>updateFilter('Completed')} href="#" >Completed </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
         
      )
    
  }

  export default FooterBar;