import React, {useState} from "react";
import "./signuppage.css"


const WaitlistForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    // TODO: Implement form submission logic
  };

  return (
    <div>
      <h2 >Sign Up For The BETA to see more </h2>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <div className="input-group">
          <label>
        
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              required
            />
          </label>
          <label>
        
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div className="button-group">
            <br />
          <button className="Signup" type="submit">Notify me </button>
          <br />
          <button className="freelancer" type="submit">Sign Up as a Freelancer</button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;



