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
      <div className="wrapper" style={{ padding: "1rem" }}>
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
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                <div>
                  <Tilt options={{ max : 25 }}>
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
                </div>
                </Col>
                <Col md="6">
                  <div>
                  <Tilt options={{ max : 25 }}>
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
                  </div>
                  </Col>
                </Row>
                <Row>
                <Col md="12" style={{ paddingTop: "2rem" }}>
                  <div>
                  <h3>
                    Terminus Labs took Rebuilt Ride from a business plan to Minimum Viable Product, and beyond.
                  </h3>
                  <p>
                    There are 274 million vehicles registered in the United States.  
                    There were approximately 6 million car accidents in the US last year, 
                    nearly 15% of those vehicals are declared a total loss by the insurance company.  
                    A portion of those vehicals are repairable, most of them end up on Craig's List.
                  </p>
                  <p>
                    Can't there be a better solution?  These shoppers aren't less discerning,
                    they're just looking to save 20% on their next automobile purchase.  A 
                    simplistic platform, listing cars that were properly repaired following 
                    light damage, is what they needed.  Terminus Labs delivered exactly that.
                  </p>
                  <p>
                    From discovery sessions, to prototypes, to MVP, Terminus Labs was a partner 
                    through the process.  We focused on the user, and tangible benefit, to design 
                    an application that fulfilled this niche.  We've signed on to continue handling maintainance and 
                    future enhancents.
                  </p>
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
