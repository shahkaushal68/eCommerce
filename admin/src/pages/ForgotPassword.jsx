import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Forgot Password</h2>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <InputComponent type="email" lable="Enter your valid email" />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Submit
                </button>
              </div>
              <div className="form-text text-center mb-5 text-dark">
                <Link to="/" className="text-dark fw-bold">
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
