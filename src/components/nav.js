import React from "react";

function Navbar() {
  return (
    <nav>
      <img className="logo" src="/images/logo.png" alt="Total Trading" />
      <div className="left"></div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/">NFT</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Buy</a>
          </li>
          <li>
            <a href="/">Referrals</a>
          </li>
          <li>
            <a href="/">Ecosystem</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <button className="btn-primary">Trade</button>
          {/* <img src="./images/download(1).png" alt="Total Trading"/> */}
            
          <button className="btn-secondary">
            <img
              className="img-wallet"
              src="./images/wallet.svg"
              alt="Total Trading"
              width="30px"
            />

            <span>Connect Wallet</span>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
