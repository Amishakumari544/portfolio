import React from 'react'

function Educard({title,subtitle,heading,text,subtext}) {
    return (
        <div>
                <div className="education">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h4 className="sub-title">{title}</h4>
              <h2 className="mb-5 mt-4">{subtitle}</h2>
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
                          {heading}
                          </h4>
                            <p>{text}</p>
                          <div className="mt-3">
                            <p>{subtext}</p>
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
        </div>
    )
}

export default Educard
