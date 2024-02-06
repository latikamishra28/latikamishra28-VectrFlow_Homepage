import PropTypes from "prop-types";
import React from "react";
// import { IconComponentNode } from "./IconComponentNode";
import "./FooterSection.css";
// import line from ".//public/line3.svg";
import { Link } from "react-router-dom";
import logo from "./public/VectrFlow_logo.png";
import google from "./public/google.svg";
import github from "./public/github.svg";
export const FooterSection = ({
  facebook = "facebook-1.svg",
  instagram = "instagram-1.svg",
  twitter = "twitter-1.svg",
  linkedin = "linkedin-1.svg",
  // text = "+908 89097 890",
  // icon = <IconComponentNode className="brand-logo" />,
  googlePageSpeed = "google-page-speed-1.png",
  text1 = "© 2023 Copyright by Agency Solutions. All rights reserved.",
  line = "line-3.svg",
}) => {
  return (
    <div className="foot">
      <hr className="hr" />
      <div className="footer">
        <div className="sas">
          <p className="text">
            A SaaS based low code ETL pipeline for creating high-quality vector
            embedding of unstructured data to build Generative AI
          </p>
          <img className="logoo" src={logo} alt="logo" />
        </div>

        <div className="links">
          <div className="ll">
            <div className="l2">
              <p className="link">Links</p>
              <div className="linkkss">
                <Link className="l1" to="/AboutUs">
                  About Us
                </Link>
                <Link className="l1" to="/Pricing">
                  Pricing
                </Link>
                <Link
                  className="l1"
                  to="https://docs.vectrflow.com/"
                  target="_blank"
                >
                  Documentation
                </Link>
                <Link className="l1" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="contact">
              <p className="cu">Contact us</p>
              <p className="gs">gs@vectrflow.com</p>
            </div>
          </div>

          <p className="copyright">
            © 2023 Copyright by Agency Solutions. All rights reserved.
          </p>
        </div>

        <div className="social-icons">
          <div className="google-wrapper">
            <img className="google" alt="google" src={google} />
          </div>
          <div className="github-wrapper">
            <img className="github" alt="github" src={github} />
          </div>
          <div className="twitter-wrapper">
            <img className="twitter" alt="Twitter" src={twitter} />
          </div>
          <div className="linkedin-wrapper">
            <img className="linkedin" alt="Linkedin" src={linkedin} />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterSection.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  text: PropTypes.string,
  googlePageSpeed: PropTypes.string,
  text1: PropTypes.string,
  line: PropTypes.string,
};
