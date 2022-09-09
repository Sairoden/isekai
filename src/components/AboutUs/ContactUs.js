import React from "react";
import "../css/style.css";

const ContactUs = () => {
  return (
    <div className="contactus flex-c justify-content-center">
      <div className="heading">Customer Support</div>
      <div className="sub-heading text-center">
        <p>
          Use the contact form below for everything regarding your order or issues on the site.
        </p>
        <p>
          <b>(Returns & exchanges, lost packages, wrong size etc.)</b>
        </p>
      </div>
      <form className="justify-content-center">
        <fieldset className="row">
          <div  className="col-50">
            <div>
              <label>
                First Name
              </label>
            </div>
            <input 
              type="text" 
              id="fName"
              className="input"
              required
            />
          </div>
          <div className="col-50">
            <div>
              <label>
                Last Name
              </label>
            </div>
            <input
              type="text" 
              id="lName"
              className="input" />
          </div>
        </fieldset>
        <fieldset>
          <div className="col-50">
            <div>
              <label>
                Email Address
              </label>
            </div>
            <input 
              type="text" 
              id="email" 
              className="input"
              required
            />
          </div>
          <div className="col-50">
            <div>
              <label>
                Order Number
              </label>
            </div>
            <input 
              type="number" 
              id="orderNum"
              className="input"
              required
            />
          </div>
        </fieldset>
        <div className="col">
          <div>
            <label>
              Subject
            </label>
          </div>
          <input 
            type="text" 
            id="subject"
            className="input"
            required
          />
        </div>
        <div className="col">
          <div>
            <label>
              Message
            </label>
          </div>
          <textarea 
            id="message"
            className="txt input"
          ></textarea>
        </div>
        <div className="col">
          <input
            type="submit" 
            value="Submit"
            className="submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
