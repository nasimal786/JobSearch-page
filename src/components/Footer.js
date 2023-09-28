import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-level1">
        <div className="footer_tagline">
          <h1>tutree</h1>
          <p>Study with us</p>
          <button>Join our group</button>
        </div>
        <div className="footer_company">
          <h2>Company</h2>
          <p>Blog</p>
          <p>About Us</p>
        </div>
        <div className="footer_help">
          <h2>Help</h2>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div className="footer_legal">
          <h2>Legal</h2>
          <p>Term & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer_follow">
          <h2>Follow</h2>
          <i className="fa-brands fa-facebook fa-lg"></i>
          <span>Facebook</span><br/>
          <i className="fa-brands fa-twitter fa-lg"></i>
          <span>Twitter</span>
          <br/>
          <i className="fa-brands fa-instagram fa-lg"></i>
          <span>Instagram</span>
        </div>
      </div>

      <div className="footer_level2">
        <p>@2023 #Tutree - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
