import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Profile = () => {
  // const [FirstName, setFirstName] = useState("");
  // useEffect(() => {
  //   let fName = localStorage.getItem("FirstName");
  //   setFirstName(fName);
  // }, []);
  // const [LastName, setLastName] = useState("");
  // useEffect(() => {
  //   let lName = localStorage.getItem("LastName");
  //   setLastName(lName);
  // }, []);
  return (
    <>
      <div className="profile">
        <div className="heading">My Account</div>
        <div className="sub-heading text-center">
          Welcome Back!
          {/* <span>{FirstName + " " + LastName}</span> */}
        </div>
        <div className="body">
          <div className="row ">
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
      <Footer />
    </>
  );
};

export default Profile;
