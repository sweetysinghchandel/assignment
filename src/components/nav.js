import React from "react";

function Navbar() {
  return (
    <nav>
      <img className="logo" src="/assignment/images/logo.png" alt="Total Trading" />
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
          {/* <img src="./assignment/images/download(1).png" alt="Total Trading"/> */}
            
          <button className="btn-secondary relative">
            <img
              className="img-wallet"
              src="./assignment/images/wallet.svg"
              alt="Total Trading"
              width="30px"
            />

            <span style={{marginLeft:20}}>Connect Wallet</span>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
