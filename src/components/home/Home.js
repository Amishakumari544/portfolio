import React from "react";
import { motion } from "framer-motion"
import Loader from "../../Loader";
function Home() {
    return (
        <div>
         
            <div className="container"
          
            >
            <div className="row">
            <div className="col-lg-7 m-auto">
                   
         <figure>
              {/* <img src={bg3} alt="bg" className="img-fluid" /> */}
            </figure>
      <div className="container home">
        <div className="row">
          <div className="text-center">
            <motion.div className="title"
        
            >
            <h2 className="home-header">Hello, 👋 I'm Amisha.</h2>
            </motion.div>
            <h3>Frontend Enthusiastic located in Jamshedpur</h3>
            <button className="btn-resume">Download Resume</button>
          </div>
        </div>
        <div className="col-lg-5 text-center my-auto pb-5 rounded-circle">
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
