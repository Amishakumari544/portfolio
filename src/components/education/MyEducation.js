import React from "react";
import bg2 from "../../assets/bg2.png";
function MyEducation() {
  return (
    <div>
      <div className="education m-auto">
        <div className="container">
          <div className="row align-items-center d-lg-flex">
            <div className="col-left">
              <h4 className="sub-title">Educational qualification,</h4>
              <h2 className="mb-5 mt-4">Education</h2>
              <div class="uk-container uk-padding">
                <div class="uk-timeline ">
                  <div class="uk-timeline-item">
                    <div class="uk-timeline-icon">
                      <span class="uk-badge">
                        <span uk-icon="check"></span>
                      </span>
                    </div>
                    <div class="uk-timeline-content">
                      <div class="uk-card uk-card-default shadow-sm uk-margin-medium-bottom uk-overflow-auto">
                        <div class="uk-card-body">
                          <h4>
                            Bachelor's Degree in Computer Science & Engineering
                          </h4>
                          <p>Arka Jain University</p>
                          <div className="mt-3">
                            <p>2020 - 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="uk-timeline-item">
                    <div class="uk-timeline-icon">
                      <span class="uk-badge">
                        <span uk-icon="check"></span>
                      </span>
                    </div>
                    <div class="uk-timeline-content">
                      <div class="uk-card uk-card-default shadow-sm uk-margin-medium-bottom uk-overflow-auto">
                        <div class="uk-card-header"></div>
                        <div class="uk-card-body">
                          <h4>Diploma in Computer Science & Engineering</h4>
                          <p>NTTF</p>
                          <div className="mt-3">
                            <p>2017 - 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="uk-timeline-item">
                    <div class="uk-timeline-icon">
                      <span class="uk-badge">
                        <span uk-icon="check"></span>
                      </span>
                    </div>
                    <div class="uk-timeline-content">
                      <div class="uk-card uk-card-default shadow-sm uk-margin-medium-bottom uk-overflow-auto">
                        <div class="uk-card-body">
                          <h4>10th</h4>
                          <p>D.A.V Cent. Public School Adityapur</p>
                          <div className="mt-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEducation;
