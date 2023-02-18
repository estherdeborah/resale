import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./signuppage.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import NotifyMePage from "./Notifymepage";
import FreelancerSignupPage from "./Freelancer";

const WaitlistForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      });
  };

  return (
    <Router>
      <div>
        <h2>Sign Up For The BETA to see more</h2>
        <form onSubmit={handleSignup} className="waitlist-form">
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
            <button className="Signup" type="submit">
              <Link to="/notify-me">Notify me</Link>
            </button>
            <br />
            <button className="freelancer" type="submit">
              <Link to="/freelancer-signup">Sign Up as a Freelancer</Link>
            </button>
          </div>
        </form>
        <Route exact path="/notify-me" component={NotifyMePage} />
        <Route exact path="/freelancer-signup" component={FreelancerSignupPage} />
      </div>
    </Router>
  );
};

export default WaitlistForm;
