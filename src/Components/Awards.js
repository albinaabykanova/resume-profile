import React, {Component } from "react";
import { Row} from "react-bootstrap";
import '../assets/css/Awards.css';
import { FaTrophy } from "react-icons/fa";



export default class Awards extends Component {
   render() {
    return (
        <Row className="container">
            <h1 className="title">AWARDS & CERTIFICATIONS</h1>
       
           <ul className="fa-ul d-grid">
                <span className="done"><FaTrophy  style={{color: '#ffc107', marginRight: '10px' }} />Google Analytics Certified Developer</span>
                <span className="done"><FaTrophy  style={{color: '#ffc107', marginRight: '10px' }} />Mobile Web Specialist - Google Certification</span>
                <span className="done"><FaTrophy style={{color: '#ffc107', marginRight: '10px' }} />1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009</span>
                <span className="done"><FaTrophy style={{color: '#ffc107', marginRight: '10px' }} />1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</span>
                <span className="done"><FaTrophy style={{color: '#ffc107', marginRight: '10px' }} />2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008</span>
                <span className="done"><FaTrophy style={{color: '#ffc107', marginRight: '10px' }} />1 st Place - James Buchanan High School - Hackathon 2006</span>
                <span className="done"><FaTrophy style={{color: '#ffc107', marginRight: '10px' }} />3 rd Place - James Buchanan High School - Hackathon 2005</span>   
            </ul>   
       </Row>
    );
   }
}
