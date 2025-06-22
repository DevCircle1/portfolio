import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/pic.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <span className="purple">Python backend developer</span>{" "}
              with a passion for building scalable systems and APIs. But I don’t
              stop there—I also wield <span className="purple">JavaScript</span>{" "}
              and <span className="purple">React</span> to bring ideas to life
              on the frontend when needed. Oh, and I’ve got a soft spot for{" "}
              <span className="purple">Machine Learning</span> too. 🚀
              <br />
              <br />
              My toolkit includes:
              <i>
                <b className="purple">
                  {" "}
                  Python (Django/Flask), Node.js, React, and ML libraries
                  (TensorFlow/PyTorch).
                </b>
              </i>
              <br />
              <br />I thrive in:
              <i>
                <b className="purple">
                  {" "}
                  Backend architecture, API design, and bridging the gap between
                  data models and user-facing applications.
                </b>
              </i>
              <br />
              <br />
              When I’m not optimizing databases or training models, I’m
              tinkering with:
              <i>
                <b className="purple">
                  {" "}
                  Modern JS frameworks (React.js, Express) and deploying ML
                  pipelines.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdullahbutt-143"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdullah-butt-2a4317297/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am_abdullah_butt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
