import React from 'react';
import Video from "../Assets/explainervideo.png";
import './Explainer.css';

const Explainer = () => {
  return (
    <div>
        <h2> Explainer Video</h2>
      <img src={Video} 
      alt="Video" 
      className="Video"
      />
    </div>
  );
};

export default Explainer;