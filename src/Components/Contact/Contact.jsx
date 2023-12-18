import React, { useState } from "react";
import "./Contact.css";
import { copy_logo, copied_logo } from "../Assets/data";

const Contact = () => {
  const copy = false;
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="phone">
        <p>+91 8074187798</p>
        <div className="copy-button" onClick={()=>{
            navigator.clipboard.writeText("+918074187798")
        }}>{copy_logo}</div>
      </div>
    </div>
  );
};

export default Contact;
