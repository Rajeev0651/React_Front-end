import React from "react";
import Information from "./Information";
import Register_form from "./Register_form";
import Footer_page from "./Footer_page";
import Navbar from "./Navbar";

function Register_page(props) {
  return (
    <React.Fragment>
      <div class="row" style={{ width: "1534px" }}>
        <div class="col-sm-12">
          <Navbar></Navbar>
        </div>
        <div class="col-sm-7" style={{ marginTop: "30px", height: "70vh" }}>
          <Information></Information>
        </div>
        <div class="col-sm-5" style={{ marginTop: "30px" }}>
          <Register_form></Register_form>
        </div>
        <div class="col-sm-12" style={{marginTop:"100px"}}>
          <Footer_page></Footer_page>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register_page;
