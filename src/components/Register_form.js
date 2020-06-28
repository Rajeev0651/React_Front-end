import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  fname: "",
  lname: "",
  email: "",
  dob: "",
  pass: "",
};
const onSubmit = (values) => {
  console.log("Form Data : ", values);
};
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Reqired"),
  dob: Yup.string().required("Required"),
  pass: Yup.string().required("Required"),
});

function Register_form(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.values);

  return (
    <div class="row" style={{marginLeft:"100px"}}>
      <div class="col-md-8 mx-auto">
        <div class="myform form ">
          <form onSubmit={formik.handleSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="username"
                class="form-control my-input"
                id="username"
                placeholder="username"
                size="100"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.username}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <input
                type="text"
                name="fname"
                class="form-control my-input"
                id="fname"
                placeholder="First Name"
                {...formik.getFieldProps("fname")}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.fname}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <input
                type="text"
                name="lname"
                class="form-control my-input"
                id="lname"
                placeholder="Last Name"
                {...formik.getFieldProps("lname")}
              />
              {formik.touched.lname && formik.errors.lname ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.lname}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <input
                type="text"
                name="email"
                class="form-control my-input"
                id="email"
                placeholder="email"
                size="100"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <input
                type="date"
                name="dob"
                class="form-control my-input"
                id="dob"
                placeholder="DOB"
                {...formik.getFieldProps("dob")}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.dob}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <input
                type="password"
                name="pass"
                id="pass"
                class="form-control my-input"
                placeholder="Password"
                {...formik.getFieldProps("pass")}
              />
              {formik.touched.pass && formik.errors.pass ? (
                <div style={{ color: "red", fontSize: "small" }}>
                  {formik.errors.pass}
                </div>
              ) : null}
            </div>
            <div class="text-center ">
              <button type="submit" class=" btn btn-block send-button tx-tfm">
                Create Your Free Account
              </button>
            </div>
            <div class="col-md-12 ">
              <div class="login-or">
                <hr class="hr-or" />
                <span class="span-or">or</span>
              </div>
            </div>
            <div class="form-group">
              <a class="btn btn-block g-button" href="#">
                <i class="fa fa-google"></i> Sign up with Google
              </a>
            </div>
            <p class="small mt-3">
              By signing up, you are indicating that you have read and agree to
              the{" "}
              <a href="#" class="ps-hero__content__link">
                Terms of Use
              </a>{" "}
              and <a href="#">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register_form;
