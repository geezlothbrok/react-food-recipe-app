import React from "react";
import "./Footer.css";

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <>
    <div className="footer container">
      <div className="footer-section">
        <p className="footer-title">FoodHub.com</p>
        <p>
          Discover a world of flavors at your fingertips! Explore thousands of
          recipes, cook with confidence, and savor the joy of cooking with
          FoodHub. Our services are absolutely free!
        </p>
      </div>

      <div className="footer-section">
        <p className="footer-title">Contact Us</p>
        <p>ohenegideon06@gmail.com</p>
        <p>+233 264 51 8732</p>
        <p>Tema, Ghana</p>
      </div>

      <div className="footer-section">
        <p className="footer-title">Socials</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twiter</p>
      </div>
    </div>
    <div className="copy-right">
             &copy; {year} FoodHub.com All Rights Reserved.
    </div> 
    </>
  );
}

export default Footer;
