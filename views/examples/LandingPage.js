import React from "react";

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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "components/Contact.js";

import ui from "../../assets/img/ui.png"
import chain from "../../assets/img/chain.png"
import report from "../../assets/img/report.png"

function LandingPage() {
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
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">What We Do:</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col>
                  <h3 style={{ textAlign: "center" }}>
                  Hello, we're Terminus Labs and we're here to help.
                  </h3>
                  <p style={{ textAlign: "center" }}>
                  Terminus Labs helps startups and established businesses develop new digital products and define their digital strategy.
                  </p>
                  <p style={{ textAlign: "center" }}>
                  We're a partner in the process to take technology products from the 
                  idea stage to deployment.
                  </p>
                  <p style={{ textAlign: "center" }}>
                  If you're established, and not sure 
                  what you need to build to remain competitive, we can help 
                  there too.
                  </p>
                  <p style={{ textAlign: "center" }}>
                  From there, we'll grow together.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section" style={{ padding: "0rem", backgroundImage: "url(" + require("../../assets/img/track.jpg") + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "black" }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{ color: "white" }}>Top Industries We Support:</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <Row>
              <Col className="ml-auto mr-auto text-center info info-hover" style={{ color: "white" }}>
                <div>
                  <h3>Supply Chain</h3>
                  <h3>Automotive</h3>
                  <h3>Ecommerce</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Top Technologies We Leverage:</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <Row>
              <Col md="4">
                <div style={{ padding: "1rem" }}>
                <a href="https://en.wikipedia.org/wiki/Web_application">
                  <img src={ui} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} className="swing rounded-circle img-fluid img-raised" />
                </a>
                  <br />
                  <h3 style={{ textAlign: "center" }}>Web and Mobile Apps</h3>
                  <p style={{ textAlign: "center" }}>Modern tech stacks using React and Angular.</p>
                </div>
              </Col>
              <Col md="4">
                <div style={{ padding: "1rem" }}>
                <a href="https://en.wikipedia.org/wiki/Blockchain">
                  <img src={chain} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} className="swing rounded-circle img-fluid img-raised" />
                </a>
                  <br />
                  <h3 style={{ textAlign: "center" }}>Blockchain</h3>
                  <p style={{ textAlign: "center" }}>Cutting edge technologies elegantly implemented.</p>
                </div>
              </Col>
              <Col md="4">
                <div style={{ padding: "1rem" }}>
                <a href="https://en.wikipedia.org/wiki/Business_intelligence">
                  <img src={report} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} className="swing rounded-circle img-fluid img-raised" />
                </a>
                  <br />
                  <h3 style={{ textAlign: "center" }}>Business Analytics</h3>
                  <p style={{ textAlign: "center" }}>Facilitating high quality decisions backed by data.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default LandingPage;
