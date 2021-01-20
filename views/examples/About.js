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
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "components/Contact.js";

import T from "../../assets/img/t.png"

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
      <PagesNavbar />
      <div className="wrapper">
        <div className="section section-team text-center">
          <Container>
          <img src={T} style={{ padding: "2rem", maxHeight: "225px" }} />
            <h2 className="title">Our Values:</h2>
            <div className="team">
              <Row>
                <Col>
                  <h3>
                  We're here to make your project successful.
                  </h3>
                  <p><b>INTEGRITY</b> is at the core of everything we do.
                  We maintain this by treating everyone with honesty and respect.  
                  This focus reinforces our <b>PARTNERSHIP</b>, both within Terminus and with our customers.
                  Our partnership allows us to acheive our objectives through teamwork and utilize diverse viewpoints to drive higher quality solutions.  
                  </p>
                  <p>
                  We believe in <b>PRAGMATISM</b>, not innovation for the sake of innovation.  
                  Every decision is made with an eye on the ROI.  
                  For the same reason, we aim for <b>SIMPLICITY</b> with our solutions.  
                  A more complicated piece of software is not always the better piece of software.  
                  We'll start with the minimum viable product and work from there.
                  This amplifies the value of our solutions and ensures a great user experience.
                  </p>
                  <p>
                  We believe in lifelong <b>LEARNING</b> to keep us up to date on current technologies. 
                  The end goal is to maximize the benefit to our customer and maintain our <b>CUSTOMER FOCUS</b>, as we always want a satisfied customer.</p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Team:</h2>
            <div className="team" >
              <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Dan20.jpg")}
                    ></img>
                    <h4 className="title">Dan Ackley</h4>
                    <p className="category text-info">Product, Solution, and Engineering Management</p>
                    <p className="description">
                      Dan brings Fortune 50 enterprise IT experience, a Master's in IS, and a yearning for the mountains.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <br />
                    <br />
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Katie20.jpg")}
                    ></img>
                    <h4 className="title">Katie Stoker</h4>
                    <p className="category text-info">Quality Assurance</p>
                    <p className="description">
                      Katie brings quality assuring attention to detail, she loves to point out your mistakes.  Also, there's the kitten obsession.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <br />
                    <br />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">The Story of Terminus:</h2>
            <div className="team">
              <Row>
                <Col>
                  <h3>
                    The history behind Atlanta, it's where we work and live.
                  </h3>
                  <p>In 1836, the Georgia General Assembly voted to build the Western and Atlantic Railroad in order to provide a link between the port of Savannah and the Midwest.  
                  The initial route was to run southward from Chattanooga to a terminus east of the Chattahoochee River, which would be linked to Savannah.  
                  After engineers surveyed various possible locations for the terminus, the "zero milepost" was driven into the ground in what is now Five Points.  
                  A year later, the area around the milepost had developed into a settlement, first known as Terminus, and later Thrasherville, after a local merchant who built homes and a general store in the area.  
                  By 1842, the town had six buildings and 30 residents and was renamed Marthasville to honor Governor Wilson Lumpkin's daughter Martha.  
                  Later, J. Edgar Thomson, Chief Engineer of the Georgia Railroad, suggested the town be renamed Atlanta.  
                  The residents approved, and the town was incorporated as Atlanta on December 29, 1847.</p>
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

export default LandingPage;
