import React, {Component} from "react";
import { Row, Col} from "react-bootstrap";
import '../assets/css/Experience.css';


export default class Experience extends Component {
  render() {
    return (
     <Row className="container experience-body">
       <h1 className="title">EXPERIENCE</h1>
       <Row className="mt-20">

     
        <Col sm={9}>
         <Row className="d-grid ">
          <h2 className="caption">SENIOR WEB DEVELOPER</h2>
          <h3 className="caption-title">INTELITEC SOLUTIONS</h3>
          <p className="desc mt-20">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
         </Row>
        </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">March 2013-Present</p>
        </Row>
      </Col>
      </Row>

     <Row className="mt-20">
      <Col sm={9}>
         <Row className="d-grid ">
          <h2 className="caption"> WEB DEVELOPER</h2>
          <h3 className="caption-title">INTELITEC SOLUTIONS</h3>
          <p className="desc mt-20">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p></Row>
      </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">December 2011 - March 2013</p>
        </Row>
      </Col>
      </Row>

      <Row className="mt-20">
      <Col sm={9}>
         <Row className="d-grid ">
          <h2 className="caption">JUNIOR WEB DESIGNER</h2>
          <h3 className="caption-title">SHOUT! MEDIA PRODUCTIONS</h3>
          <p className="desc mt-20">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. </p></Row>
      </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">July 2010 - December 2011</p>
        </Row>
      </Col>
      </Row>

      <Row className="mt-20">
      <Col sm={9}>
         <Row className="d-grid ">
          <h2 className="caption">WEB DESIGN INTERN</h2>
          <h3 className="caption-title">SHOUT! MEDIA PRODUCTIONS</h3>
          <p className="desc mt-20">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
          </p></Row>
      </Col>
      <Col sm={3}>
         <Row className="d-grid ">
        <p className="date">September 2008 - June 2010</p>
        </Row>
      </Col>
      </Row>
      <hr />
      </Row>  
    );
  }
}