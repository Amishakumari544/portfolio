import React from "react";
import Profile1 from "./../../assets/Profile1.jpg"
import { motion } from "framer-motion"
import Loader from "../../Loader";
import Amisha_KumariResume from "./../../assets/Amisha_KumariResume.pdf"
function Home() {
    return (
        <div>
         
          <div className="container home">
            <div className="row">
              <div className="col-lg-12 text-center">
              <h2 className="">Hello, 👋 I'm Amisha.</h2>
        
        <h3>Frontend Enthusiastic located in Jamshedpur</h3>
        <a href={Amisha_KumariResume} className="btn-resume">Download Resume</a>
              </div>
           
            </div>
          </div>
     
           
    
          
    
   
    </div>
  );
}

export default Home;
