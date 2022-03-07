import React, {Component} from "react";
import { Col, Row, Nav } from "react-bootstrap";
import '../assets/css/Home.css';
import Avatar from 'react-avatar';
import About from "../Components/About";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Interests from "../Components/Interests";
import Awards from "../Components/Awards";

 class Home extends Component {
   render () {
    return (
      <div className="body">

        <Row>
          <Col sm={3}>
            <div className="sidebar d-grid  justify-content-center align-items-center">

             <Row className="d-grid ">
               <div className="avatar-border">
                 <Avatar round size="130"  src={require('../assets/images/foto.jpg')} />
               </div>
              <Nav defaultActiveKey="/home" className="mt-20 flex-column d-grid justify-content-center align-items-center text-center">
                <Nav.Link className="menu-item" href="/home">About</Nav.Link>
                <Nav.Link  className="menu-item" >Experience</Nav.Link>
                <Nav.Link  className="menu-item">Education</Nav.Link>
                <Nav.Link  className="menu-item">Skills</Nav.Link>
                <Nav.Link  className="menu-item">Interests</Nav.Link>
                <Nav.Link  className="menu-item">Awards</Nav.Link>
               
              </Nav>
            
              </Row>
            </div>

          </Col>
            <Col style={{backgroundColor: '#fff'}} sm={9}>
              <About/>
              <Experience />
              <Education />
              <Skills />
              <Interests />
              <Awards />
            </Col>
       </Row>
      </div>

    );
   }
}

export default Home;
