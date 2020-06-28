import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../CSS/Navbar.css";

const initialValues = {
  username: "",
  pass: "",
};

const onSubmit = (values) => {
  console.log("Form Data : ", values);
};
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  pass: Yup.string().required("Required"),
});

function Navbar(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar w/ text
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <form>
          <div class="form-row">
            <div class="col-7">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="username"
                {...formik.getFieldProps("username")}
              />
            </div>
            <div class="col">
              <input
                type="password"
                class="form-control"
                name="pass"
                placeholder="password"
                {...formik.getFieldProps("pass")}
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
