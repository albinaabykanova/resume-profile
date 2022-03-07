import React, {Component} from "react";
import { Container, Row } from "react-bootstrap";
import { FaFacebookF, FaGithub , FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import '../assets/css/About.css';


export default class About extends Component {
   render () {
    return (
     <Container className="about-body d-grid  align-items-center">
       <Row>
          <h1 className="name">CLARANCE <span className="surname">TAYLOR</span></h1>
         <p className="subheading mb-15">3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468
            <span className="mail">NAME@EMAIL.COM</span>
         </p>
      
       <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high 
          level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the
           overall value proposition.
       </p>
      <div className="social-media">
          <div className="social-icon">
              <FaLinkedinIn />
          </div>
          <div className="social-icon">
                <FaGithub /> 
          </div>
          <div className="social-icon">
              <FaTwitterSquare /> 
          </div>
          <div className="social-icon">
              <FaFacebookF  /> 
          </div>
      </div>
      </Row>
       <hr />
     </Container>
  
    );
   }
}

