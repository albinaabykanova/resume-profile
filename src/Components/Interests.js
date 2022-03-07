import React, {Component } from "react";
import { Row} from "react-bootstrap";
import '../assets/css/Interests.css';


export default class Interests extends Component {
   render() {
    return (
        <Row className="container">
            <h1 className="title">INTERESTS</h1>
        <Row className="d-grid ">
            <p className="desc mt-20">Apart from being a web developer, I enjoy most of my time being outdoors. In the winter
             I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking,
             free climbing, and kayaking.</p>
             <p className="desc mt-20">When forced indoors, I follow a number of sci-fi and fantasy genre movies and 
             television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest 
             technology advancements in the front-end web development world.</p>
        </Row>
        <hr />
        </Row>
    );
   }
}
