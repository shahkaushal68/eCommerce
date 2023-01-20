import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  //console.log(state);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (userData) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(loginUser({ userData, navigate }));
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login Here</h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={formik.handleSubmit}
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <InputComponent
                  type="email"
                  className="form-control"
                  lable="Email"
                  name="email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleChange("email")}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <InputComponent
                  type="password"
                  className="form-control"
                  lable="Password"
                  name="password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleChange("password")}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="text-center mb-5">
                <button type="submit" className="btn btn-color px-5  w-100">
                  Login
                </button>
                {isError && <div style={{ color: "red" }}>{message}</div>}
              </div>

              <div className="form-text text-center mb-5 text-dark">
                Not Registered?
                <Link to="/" className="text-dark fw-bold">
                  Create an Account
                </Link>
              </div>
              <div className="form-text text-center mb-5 text-dark">
                Password not remember!
                <Link to="/forgot-password" className="text-dark fw-bold">
                  Forgot Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
