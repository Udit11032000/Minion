import React from "react";
import './App.css';

import * as ReactBootStrap from "react-bootstrap";

function Nav() {
  return (
   <div>
       <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="Navmybar">
  <ReactBootStrap.Nav href="/" class="Minions">minions</ReactBootStrap.Nav>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="mr-auto dropdown">
     
     </ReactBootStrap.Nav>
    
    <ReactBootStrap.Nav>
    <ReactBootStrap.NavDropdown title="My Social" class="student">
        <ReactBootStrap.NavDropdown.Item href="https://www.instagram.com/debnathudit/">Instagram</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="https://www.linkedin.com/in/udit-debnath-083258181/" >Linkdin</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="https://github.com/Udit11032000" >GitHub</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item class="details">Udit Debnath</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item>20181CSE0753</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item>6CSE12</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/about">About Me</ReactBootStrap.Nav.Link>
     
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
   </div>
  );
}

export default Nav;
