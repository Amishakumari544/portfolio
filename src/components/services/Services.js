import React from "react";
import Card from "../../common/Card";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.png";
function Services(props) {
  return (
    <div>
      <div className="service-bg">
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="">
                <h2 className="s mb-4 mt-3">Skills</h2>
                <p>
                  Skills are money!! <br /> Here are my skills XP
                </p>
                <div className="bg-img">
                  <p className="font-weight-light mb-4 p-text">
                    I have also tried hands on Wordpress,Canva,Figma and a lot
                    more.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="d-flex align-items-baseline  justify-content-around">
                  <Card
                    link="https://image.flaticon.com/icons/png/128/4416/4416502.png"
                    title="Web Development"
                  />
                  <Card
                    link="https://image.flaticon.com/icons/png/128/2111/2111288.png"
                    title="Version Control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="d-flex align-items-baseline justify-content-around">
                  <Card
                    link="https://image.flaticon.com/icons/png/128/4389/4389267.png"
                    title="C++ / C"
                  />
                  <Card
                    link="https://www.flaticon.com/svg/vstatic/svg/1387/1387537.svg?token=exp=1617195267~hmac=71afef038b440a2e11dee55d4f0e1955"
                    title="python"
                  />
                </div>
              </div>
            </div>
            <div className="btn-contact bg-contact text-center">
              <h4>
                <b>Get a project? Let’s talk.</b>
              </h4>
              <span className="email-color">@</span>{" "}
              <a
                href="mailto: amishakumari544@gmail.com"
                className="list-unstyled text-decoration-none text-muted"
              >
                amishakumari544@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
