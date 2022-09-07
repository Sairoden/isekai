import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="heading">My Account</div>
      <div className="sub-heading text-center">
        Welcome Back! <span>Andrea Chiu</span>
      </div>
      <div className="body">
        <div className="row">
          <div className="col">
            <div className="label">My Orders</div>
            <hr />
          </div>
          <div className="col">
            <div className="label">Primary Address</div>
            <hr />
            <Link to="address">
              <button className="submit-btn">Edit Address</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
