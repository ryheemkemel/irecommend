import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/courses-vector.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Welcome to <strong className="main-name">I RECOMMEND</strong> !
              </h1>

              <h1 className="heading-name">
              Our Dynamic Course Recommendation System is designed to help you discover courses that align with your interests and academic performance, making your educational experience more engaging and effective.
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
