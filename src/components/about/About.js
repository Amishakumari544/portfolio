import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function About() {
  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="">A little about me,</h2>
            <div className="col-lg-6 col-md-12">
              <h2 className="mb-3">Hello!</h2>
            </div>
            <div className="about-text">
              <p className="lead">
                I’m a Front End Enthusiastic. I have a Passion for Creating
                Clean, Beautiful, Interactive, Minimalistic, Responsive and User
                Friendly UI, Developed by Modular, Scalable and Functional Code.
              </p>
            </div>
            <p className="font-weight-bolder">Connect with me here:</p>
            <ul className="social-links list-unstyled">
              <li>
                <Link to="">
                  <FaFacebookF className="social-icons display-6" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaTwitter className="social-icons display-6 " />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaInstagram className="social-icons display-6" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaGithub className="social-icons display-6" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaLinkedinIn className="social-icons display-6" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <AiFillMail className="social-icons display-6" />
                </Link>
              </li>
            </ul>
            <div>
              <div className="col-lg-6 col-md-12 text-left">
                <h2 className="mb-3">My Works</h2>
                <p>
                  I have worked on various projects in different domains you can
                  find their details here:
                </p>
                <ul>
                  <li className="font-weight-lighter mb-2">
                    Restaurant Website for Online Food Delivery
                  </li>
                  <li className="font-weight-lighter mb-2">
                    NGO Website where anyone can donate to the portal for
                    helping poor people
                  </li>
                  <li className="font-weight-lighter mb-2">
                    Auto Search error Stack Overflow using Python which can
                    decode error in C++/JAVA/Python
                  </li>
                  <li className="font-weight-lighter mb-2">
                    Personal Portfolio
                  </li>
                </ul>
              </div>
              <div className="my-work"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
