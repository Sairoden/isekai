import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../User/User.css";

import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
  // show or hide password
  const [passwordType, setpasswordType] = useState("password");
  function togglePasswordType() {
    if (passwordType === "password") {
      setpasswordType("text");
    } else {
      setpasswordType("password");
    }
  }

  return (
    <div className="login">
      <h1 className="heading">LOGIN</h1>
      <p className="sub-heading">Please enter your e-mail and password:</p>
      <form>
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
        <button className="submit-btn">LOGIN</button>
      </form>
      <div>
        <p>
          Don't have an account? <Link to="/register">Create One</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
