import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Food-Ordering</h4>
            <h1 className="list-unstyled">
              <li>39897987393</li>
              <li>India</li>
              <li>some detailed address</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>DETAILS</h4>
            <ui className="list-unstyled">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>SOCIAL HANDLES</h4>
            <ul className="list-unstyled">
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>TWITTER</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Food-Ordering-Online | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
