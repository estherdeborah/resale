import React from "react";
import "./card.css";
import Unsplash from "../Assets/unsplash.png";
import Unsplash1 from "../Assets/unsplash1.png";
import Unsplash2 from "../Assets/unsplash2.png";
import Group from "../Assets/Group2.png";
import Group1 from "../Assets/Group3.png";
import Group2 from "../Assets/Group.png";

const Container = () => {
  return (

    <div>
      <div className="splash-row">
        <div className="splash-card">
          <img src={Unsplash} alt="logo" />
          <h3>Logo</h3>
          <p>
            Have a unique & creative logo designed to express and represent your
            brand identity.
          </p>
        </div>

        <div className="splash-card">
          <img src={Unsplash1} alt="logo" />
          <h3>Blog writing</h3>
          <p>
            Write SEO enriched blog posts as long or short articles on any topic of your choice.
          </p>
        </div>

        <div className="splash-card">
          <img src={Unsplash2} alt="logo" />
          <h3>Animated Video</h3>
          <p>
            Bring animated characters to life to keep your viewers engaged and entertained.
          </p>
        </div>

        <div className="splash-card">
          <img src={Group} alt="logo" />
         
          <p>
          Introduce your product to potential customers in a clear and creative video.

          </p>
        </div>

        <div className="splash-card">
          <img src={Group1} alt="logo" />
         
          <p>
          Have creative and compelling copies written to boost your product, brand, service or company.

          </p>
        </div>

        <div className="splash-card">
          <img src={Group2} alt="logo" />
         
          <p>
          Boost sales and awareness with tailor made ads from experts.

          </p>
        </div>
      </div>
      </div>




        
       
   

  );
};

export default Container;
