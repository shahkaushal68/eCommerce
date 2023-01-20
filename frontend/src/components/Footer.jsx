import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <NewsLetter />
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="">Pages</Link>
                </li>
                <li>
                  <Link to="">Our Tea</Link>
                </li>
                <li>
                  <Link to="">Feucher</Link>
                </li>
                <li>
                  <Link to="">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Ressources
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="">Monitorng Grader </Link>
                </li>
                <li>
                  <Link to="">Video Ttorial</Link>
                </li>
                <li>
                  <Link to="">Term &ap; Service</Link>
                </li>
                <li>
                  <Link to="">Zeeko AI</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <Link to="">Sign Up</Link>
                </li>
                <li>
                  <Link to="">Login</Link>
                </li>
                <li>
                  <Link to="">Terms o Services</Link>
                </li>
                <li>
                  <Link to="">PrivacyPolicy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Contact Us
              </h6>
              <p className="contact-info mt-4">
                Contact us if need help withanything
              </p>
              <p className="contact-info">+01 123-456-7890</p>
              <div className="mt-5">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab facebook footer-social-icon fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab twitter footer-social-icon fa-twitter" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab google footer-social-icon fa-google" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab apple footer-social-icon fa-apple" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
