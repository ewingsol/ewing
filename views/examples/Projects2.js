import React from "react";
import Contact from "components/Contact.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import Tilt from "react-tilt";

import phone from "../../assets/img/bg3.jpg";

// core components
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Projects() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <PagesNavbar />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Terminus Labs + Rebuilt Ride</h2>
                <h5 className="description">
                  Rebuilt Ride started as an idea, Terminus Labs brought it to life.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                <div>
                  <Tilt>
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/text560.png") + ")",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      zIndex: "0",
                      backgroundColor: "white"
                    }}
                  >
                  </div>
                  </Tilt>
                  <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                    <p className="blockquote blockquote-info">
                      "I wanted something easy to use, specially crafted to our user base.  Terminus Labs delivered exactly that.  They helped us identify our needs, the MVP, and had something workable quickly."
                      <br></br>
                      <br></br>
                      <small>-RR</small>
                    </p>
                  </div>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                  <Tilt>
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/text35.png") + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                        backgroundColor: "white"
                    }}
                  ></div>
                  </Tilt>
                  <div style={{ paddingTop: "1rem" }}>
                  <h3>
                    Terminus Labs took Rebuilt Ride from a business plan to a Minimum Viable Product, and beyond.
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Contact />
        <DefaultFooter />
      </div>
    </>
  );
}

export default Projects;
