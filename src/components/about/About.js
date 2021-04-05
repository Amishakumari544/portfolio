import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Svg from "../../common/svg/Svg";
function About() {
  return (
    <div>
      <motion.div
        className=""
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.5 }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 col-md-12 col-sm-5">
            <h4 className="sub-title mg-b22 mt-2">A little about me,</h4>
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
            <div className="social-div">
            <ul className="social-links list-unstyled">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0, color: "#000" }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link to="https://twitter.com/amishakumari544">
                  <FaTwitter className="social-icons display-6 " />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0, color: '#777777' }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Link to="">
                  <FaInstagram className="social-icons display-6" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0, color: "#000" }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Link to="">
                  <FaGithub className="social-icons display-6" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0, color: "#000" }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Link to="">
                  <FaLinkedinIn className="social-icons display-6" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0, color: "#000" }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Link to="">
                  <AiFillMail className="social-icons display-6" />
                </Link>
              </motion.li>
            </ul>
            </div>
         </div>
          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 text-left">
              <h4 className="sub-title mg-b22">Projects i have worked on,</h4>
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
              <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="my-work">
              <Svg />
              </div>
              </div>
            </div>
          </div>
     
      </motion.div>
    </div>
  );
}

export default About;
