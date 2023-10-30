import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img src="/assignment/images/logo.png" alt="Total Trading" width="100px" />
      <div className="link-container">
        <a href="https://twitter.com/zomi.finance">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://zomifinance.medium.com/">
          <i className="fa-brands fa-medium"></i>
        </a>
        <a href="https://github.com/zomi">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://t.me/zomichat">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="https://discord.com/invite/senshilabs">
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>
      <p className="text-secondary">
        
      </p>

      <div className="footer-bottom">
        <a href="https://zomi.finance/#/terms-and-conditions">
          Terms and Conditions
        </a>
        <a href="https://zomi.finance/#/referral-terms">Refferal Terms</a>
        <a href="https://docs.zomi.finance/">Media Kit</a>
      </div>
    </div>
  );
}
export default Footer;
