import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';

function FooterBar({setFilter}){


      return (
        <Navbar bg="light" expand="lg" > 
          
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <Nav.Link active key="All" onClick={()=>setFilter("All")} >All </Nav.Link> 
      <Nav.Link key="Active" onClick={()=>setFilter("Active")}  >Active
         </Nav.Link>  
         <Nav.Link key="Active" onClick={()=>setFilter("Completed")}  >Completed </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
       
        </Navbar>
         
      )
    
  }

  export default FooterBar;