import React from "react";

function Container() {
  return (
    <main className="home-container">
      <section className="home-section">
        <div className="home-content">
          <h1>Decentralised Perpetual Exchange</h1>
          <p className="text-secondary">
            Trade BTC, ETH , AVAX ,and other top cryptocurrencie swith upto 30x
            levarage directly from your wallet
          </p>
          <button className="btn-primary">Launch Exchange</button>
        </div>
      </section>
      <div className="result-container">
        <div className="asset-card">
          <img src="./assignment/images/ic_trading.2c53815a.svg" alt="Total Trading" />

          <div className="result-info">
            <p>Total Trading Value</p>
            <h3>$0</h3>
          </div>
        </div>
        <div className="asset-card">
          <img src="./assignment/images/ic_stats.f0a18011.svg" alt="Total Trading" />

          <div className="result-info">
            <p>Open Interest</p>
            <h3>$0</h3>
          </div>
        </div>
        <div className="asset-card">
          <img src="./assignment/images/ic_totaluser.ae09b310.svg" alt="Total Trading" />

          <div className="result-info">
            <p>Total Users</p>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Container;
