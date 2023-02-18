import React from "react";
import "./container.css";
import AI from "../Assets/artificial-intelligence-svgrepo-com 1AI.jpg";
import Group from "../Assets/Groupbrandidentity.jpg";
import Vector from "../Assets/Vectorinform.jpg"
import Customer from "../Assets/direct-customer-svgrepo-com 1review.jpg"
import Publish from "../Assets/Vectorpublish.jpg"

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src={AI} className="card-img-top text-center" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title">MakeAI-assisted <br></br>Content Choices</h5>
            <p className="card-text">
              Access and Order from an extensive  catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Group} className="card-img-top text-center" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title"> Upload and Maintain your Brand Identity </h5>
            <p className="card-text">
            Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Vector} className="card-img-top text-center" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title">Be informed as we create</h5>
            <p className="card-text">
            Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.
            </p>
          </div>
        </div>
      </div>
      
      <div>

      <div className="card-row1">
        <div className="card">
          <img src={Customer } className="card-img-top text-center" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title">Receive and Review</h5>
            <p className="card-text">
            The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.
            </p>
          </div>
        </div>

        <div className="cardrow1">

        <div className="card  ">
          <img src={Publish} className="card-img-top text-center" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title"> Publish and Monitor your contents’ progress</h5>
            <p className="card-text">
            The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.
            </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
