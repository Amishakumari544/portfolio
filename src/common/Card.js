import React from 'react'

function Card(props) {
    return (
        <div>
             <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="service-block text-center mb-4"> 
                <img className="programming-icon" src={props.link} alt="programming" />
                <h5 className="mb-2">{props.title}</h5>
               
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Card
