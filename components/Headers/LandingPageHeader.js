import React from "react";
import logo from '../../assets/img/terminus.png';

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-large">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/atlanta.jpg") + ")",
            backgroundColor: "grey"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <img src={logo} />
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
