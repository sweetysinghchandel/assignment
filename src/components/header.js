import React from "react";

function Header() {
  return (
    <div className="bottom-container">
      <div className="info-container">
        <div className="info-card">
          <div className="card2">
            <img
              src="./assignment/images/ic_liquidity.505b3f30 (1).svg"
              alt="Total Trading"
            />

            <h3>Reduce Liquidation Risks</h3>
          </div>
          <p className="text-secondary">
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>
        <div className="info-card">
          <div className="card2">
            <img src="./assignment/images/ic_cost.b4a729d3 (1).svg" alt="Total Trading" />

            <h3>Save on Costs</h3>
          </div>
          <p className="text-secondary">
            Enter and exit positions with minimal spread and zero price impact.
            Get the optimal price without incurring additional costs.
          </p>
        </div>
        <div className="info-card">
          <div className="card2">
            <img
              src="./assignment/images/ic_simpleswaps.2005009f (2).svg"
              alt="Total Trading"
            />
            <h3>Simple Swaps</h3>
          </div>
          <p className="text-secondary">
            Open positions through a simple swap interface. Conveniently swap
            from any supported asset into the position of your choice.
          </p>
        </div>
      </div>
      <h1>Two tokens create our ecosystem</h1>
      <div className="ecosystem">
        <div className="zomi">
          <div className="card2">
            <img
              src="./assignment/images/download (1).png"
              alt="Total Trading"
              height="40px"
            />
            <h2>$ZOMI</h2>
          </div>

          <h3>
            $ZOMI is the utility and governance token. Accrues 30% of the
            platform's generated fees.
          </h3>
          <p>Ethereum APR: 0.00%</p>
          <button className="btn-primary">Buy</button>
          <button className="btn-secondary">Read More</button>
        </div>
        <div className="zlp">
          <div className="card2">
            <img
              src="./assignment/images/download (2).png"
              alt="Total Trading"
              height="40px"
            />
            <h2>$ZOMI</h2>
          </div>

          <h3>
            $ZLP is the liquidity provider token. Accrues 70% of the platform's
            generated fees.
          </h3>
          <p>Ethereum APR: 1,653,265,449.23%</p>
          <button className="btn-primary">Buy</button>
          <button className="btn-secondary">Read More</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
