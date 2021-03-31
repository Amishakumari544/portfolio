import React from "react";
import { GoMailRead,GoMarkGithub } from "react-icons/go";
function Contact() {
  return (
    <div>
      <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ">
            <h1>Let's work together!</h1>
            <h1 className="mb-5">Fill Out the form.</h1>
            <div className="contact">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="input-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleFormControlTextarea1"
                    className="contact-message mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control-input"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="button"
                  class="btn btn-submit btn-lg btn-block mt-2"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          {/* <div className="col-lg-3 m-auto">
            <div className="contact-left">
              <div className="img align-items-center mb-3">
                <div className="media-icon">
                <GoMailRead />
                </div>
                <div className="media-body">
                  <h4>Email</h4>
                  <span>kumari.amisha@outlook.com</span>
                </div>
              </div>
              <div className="img align-items-center mb-3">
                <div className="media-icon">
                  <GoMarkGithub />
                </div>
                <div className="media-body">
                <h4>Github</h4>
                <span> Amishakumari544 </span>
              </div>
              </div> */}
              {/* <div className="img align-items-center mb-3">
                <div className="media-icon">

                </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
