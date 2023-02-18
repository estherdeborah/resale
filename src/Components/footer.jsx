import React from "react";
import Logo from "../Assets/Logoretinklogo.jpg";
import Image1 from "../Assets/Group 20976.png";
import Image2 from "../Assets/Frame 2246.png";


const Footer = () => {
  return (
    <footer>
     
      <div className="image-container">
        <img src={Image1} alt="image1" />
        <img src={Image2} alt="image2" />
       
      </div>
    </footer>
  );
};

export default Footer;
