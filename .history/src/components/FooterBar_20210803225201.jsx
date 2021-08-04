import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';

function FooterBar({defaultFilter,activeTasksFilter , completedTasksFilter , setFilter}){


      return (
        <Navbar  > 
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <Nav.Link onClick={setFilter(defaultFilter)} href="#" >All </Nav.Link> 
      <Nav.Link onClick={setFilter(activeTasksFilter)} href="#">Active
         </Nav.Link>  
         <Nav.Link onClick={setFilter(completedTasksFilter} href="#" >Completed </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
         
      )
    
  }

  export default FooterBar;