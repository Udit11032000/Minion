import React from "react";
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import image from "./images/Minion uploaded by GLen =^● 。●^=_ on We Heart It.gif"

function About() {
  return (
    
        <div class="minion-svg">
            <ReactBootStrap.Row>
        
                <ReactBootStrap.Col sm className="col-minion"><h1 class="minion-about">about me?</h1><p className="paragraph">umm..nothing much I am just a boring human like you</p></ReactBootStrap.Col>
                <ReactBootStrap.Col sm className="col-minion">
                <img class="image-dimension" src={image} alt="image"/>
                </ReactBootStrap.Col>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,53.3C384,85,480,171,576,176C672,181,768,107,864,74.7C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </ReactBootStrap.Row>
               
        </div>
  );
}

export default About;
