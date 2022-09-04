import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../User/User.css";

import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Register = () => {
  const [passwordType, setpasswordType] = useState("password");
  function togglePasswordType() {
    if (passwordType === "password") {
      setpasswordType("text");
    } else {
      setpasswordType("password");
    }
  }

  return (
    <div className="register">
      <h1 className="heading">Register</h1>
      <p className="sub-heading">Please fill in the information below:</p>
      <form>
        <div className="bundle">
          <div>
            <label htmlFor="first-name">
              <h3 className="label">First Name:</h3>
            </label>
          </div>
          <input type="text" id="first-name" required />
        </div>
        <div className="bundle">
          <div>
            <label htmlFor="last-name">
              <h3 className="label">LastName:</h3>
            </label>
          </div>
          <input type="text" id="last-name" required />
        </div>
        <div className="bundle">
          <div>
            <label htmlFor="email">
              <h3 className="label">Email</h3>
            </label>
          </div>
          <input type="text" id="email" required />
        </div>
        <div className="bundle">
          <div>
            <label htmlFor="password">
              <h3 className="label">Password</h3>
            </label>
          </div>
          <div className="password-holder">
            <input
              type={passwordType}
              id="password"
              className="input-password"
              required
            />
            <button type="button" onClick={togglePasswordType}>
              {passwordType === "password" ? (
                <EyeInvisibleOutlined
                  style={{ fontSize: "20px" }}
                  className="hide-password"
                />
              ) : (
                <EyeOutlined
                  style={{ fontSize: "20px" }}
                  className="show-password"
                />
              )}
            </button>
          </div>
        </div>
        <button className="submit-btn">REGISTER</button>
      </form>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
