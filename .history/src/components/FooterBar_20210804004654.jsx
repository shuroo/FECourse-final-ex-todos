import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, NavItem } from 'react-bootstrap';

function FooterBar({setFilter}){


      return (
        <Navbar  > 
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <NavItem active key="All" onClick={setFilter("All")} >All </NavItem> 
      <NavItem key="Active" onClick={setFilter("Active")}  >Active
         </NavItem>  
         <NavItem key="Completed" onClick={setFilter("Completed")}  >Completed </NavItem> 
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
         
      )
    
  }

  export default FooterBar;