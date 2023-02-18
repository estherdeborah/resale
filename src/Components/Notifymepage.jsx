import React from "react";
import "./notifymepage.css"
const NotifyMePage = () => {
  return (
    <div>
      <h2>Thank you for signing up!</h2>
      <p>We'll notify you when our beta program launches.</p>
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
};

export default NotifyMePage;
