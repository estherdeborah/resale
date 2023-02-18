import React from 'react';
import "./Navbar.css"
import avatar from "../Assets/Retink-avatar.jpg";

function Navbar()
{
  return (
    <div>
        <body>
        
    
      <div >
        <h1>
          Get Advanced AI <br></br>+Expert Created <span className="logo-text">Logo</span>
          <div className="image-container">
              <img src={avatar} alt="Example" className="logo-image" />
            </div>
        </h1>
        
        <div>
       <p> Boost your sales <span className="logo-text"> 10x faster</span> with content customized by our <br></br>unique partnership of<span className="logo-text">human creativity and AI optimization</span> </p>
        </div>
      </div>
      </body>
      </div>
    
  );
};
export default Navbar;


