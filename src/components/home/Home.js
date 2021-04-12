import React from "react";
import { motion } from "framer-motion"
import Loader from "../../Loader";
function Home() {
    return (
        <div>
         
            <div className="container">
            <div className="row">
            <div className="col-lg-7">
                   
         <figure>
              {/* <img src={bg3} alt="bg" className="img-fluid" /> */}
            </figure>
      <div className="container home">
        <div className="row">
          <div className="text-center">
          <div className="col-lg-12 col-sm-12">
            <h2 className="text-center">Hello, 👋 I'm Amisha.</h2>
        
            <h3>Frontend Enthusiastic located in Jamshedpur</h3>
            <button className="btn-resume">Download Resume</button>
            </div>
          </div>
        </div>
        <div className="col-lg-5 text-center my-auto rounded-circle">
          {/* <img src={profile1} className="img-fluid rounded-circle" alt="profile" /> */}
        </div>
        </div>
        </div>
        </div>
        </div>
   
    </div>
  );
}

export default Home;
