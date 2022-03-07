import React, {Component } from "react";
import { Row,div } from "react-bootstrap";
import '../assets/css/Skills.css';
import { FaCss3Alt,FaAdn,FaJsSquare,FaNpm,FaSass,FaWordpress,FaLess, FaReact,FaGrunt,FaGulp,FaCheck} from "react-icons/fa";

export default class Skills extends Component {
   render() {
    return (
        <Row className="container skills-body">
           <h1 className="title">SKILLS</h1>
            
              <Row className="d-grid ">
                <h2 className="caption-title">PROGRAMMING LANGUAGES & TOOLS</h2>
                  <div className="d-flex">
                      < FaCss3Alt className="icons" />
                      <FaAdn className="icons" />
                      <FaJsSquare className="icons" />
                      <FaNpm className="icons" />
                      <FaSass className="icons" />
                      <FaWordpress className="icons" />
                      <FaLess className="icons" />
                      <FaReact className="icons" />
                      <FaGrunt className="icons" />
                      <FaGulp className="icons" />
                  </div>
           </Row>
         
               <h2 className="caption-title">WORKFLOW</h2> 
               <ul className="fa-ul d-grid">
                   <span className="done"><FaCheck/> Mobile-First, Responsive Design</span>
                   <span className="done"><FaCheck/> Cross Browser Testing & Debugging</span>
                   <span className="done"><FaCheck/> Cross Functional Teams</span>
                   <span className="done"><FaCheck/> Agile Development & Scrum</span>
               </ul>
          
             <hr/>
        </Row>
    );
  }
}