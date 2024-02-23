import "./footer.css";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="secondary-frame">
      <div className="secondary-frame-child" />
      <Logo/>
      <div className="vector-xicon">
        <div className="description">
          <img
            className="solarrecordsquarelinear-icon"
            loading="eager"
            alt=""
            src="/vector.svg"
          />
          <img className="x-icon" loading="eager" alt="" src="/xicon.svg" />
          <img
            className="facebook-icon"
            loading="eager"
            alt=""
            src="/facebookicon.svg"
          />
          
        </div>
        <div className="all-rights-reserved">All rights reserved ©2024</div>
      </div>
    </footer>
  );
};

export default Footer;
