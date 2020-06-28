import React from "react";
import "../CSS/footer.css";

function Footer_page(props) {
  return (
    <footer
      class="container-fluid text-center"
      style={{ backgroundColor: "#2f2f2f", color: "#ffffff", height: "80px" }}
    >
      <div class="row">
        <div class="col-md4-4 mx-auto" style={{ marginTop: "20px" }}>
            <a href="#">About</a>
        </div>
        <div class="col-md4-4 mx-auto" style={{ marginTop: "20px" }}>
            <a href="#">Career</a>
        </div>
        <div class="col-md4-4 mx-auto" style={{ marginTop: "20px" }}>
            <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer_page;
