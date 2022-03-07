import React, {Component} from "react";
import { Row, Col} from "react-bootstrap";
import '../assets/css/Education.css';

export default class Experience extends Component {
  render() {
   return (
    <Row className="container education-body">
     
      <Row className="mt-20">
      <h1 className="title">EDUCATION</h1>
      <Col sm={9}>
         <Row className="d-grid ">
            <h2 className="caption">UNIVERSITY OF COLORADO BOULDER</h2>
            <h3 className="caption-title">BACHELOR OF SCIENCE</h3>
            <p className="desc mt-20">Computer Science - Web Development Track</p>
            <p>GPA: 3.23</p>
         </Row>
        </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">August 2006 - May 2010</p>
        </Row>
      </Col>
      </Row>

      <Col sm={9}>
         <Row className="d-grid ">
            <h2 className="caption">JAMES BUCHANAN HIGH SCHOOL</h2>
            <h3 className="caption-title">TECHNOLOGY MAGNET PROGRAM</h3>
            <p className="desc mt-20">GPA: 3.56</p>
         </Row>
        </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">August 2002 - May 2006</p>
        </Row>
      </Col>
      <hr />
    </Row>
   ); 
  }
}