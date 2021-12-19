import React from "react";
import './About.css';
import keyboard from '../Img/keyboard.jpeg'
import printer from '../Img/printer.jpeg';
import pc from '../Img/pc.jpeg'

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>
        {" "}

     
       
        Welcome Back Admin @BONNIE ELECTRICALS SHOP
        <p>BELOW ARE THE MOST VIEWED PRODUCTS BY KENYANS ON E-COMMERCE PLATFORMS</p>

        <div className="ul">

          <div className="">
             <img src={keyboard} alt="" />
             <div className="desc">
               <h2>GAMING KEYBOARD</h2>
             </div>
            </div>   

            <div>
             <img src={pc} alt="" />
             <div className="desc">
               <h2>ASUS GAMING LAPTOP</h2>
             </div>
            </div>   


            <div>
             <img src={printer} alt="" />
             <div className="desc">
               <h2>3D PRINTER</h2>
             </div>
            </div>   


        </div>
      
      
        
      </h2>
      
       
         
    </div>
  );
};

export default About;
