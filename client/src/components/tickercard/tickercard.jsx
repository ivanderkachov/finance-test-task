import React from "react"

import iconUp from "../../icons/angle-circle-up-icon.png";
import iconDown from "../../icons/angle-circle-down-icon.png";
import './tickercard.css'

const Tickercard = ({ ticker, direction }) => {
  return (
    <div className={direction ? "card__wrapper" : "card__wrapper-red"}>
      <img
        className={direction ? "card__wrapper_img" : "card__wrapper_img-red"}
        src={direction ? iconUp : iconDown}
        alt=""
      />
      <div className="card__wrapper_nameprice">
        <h3>{ticker.ticker}</h3>
        <p>{ticker.price}$</p>
      </div>
      <div className="card__wrapper_changes">
        <p>Change {ticker.change}$</p>
        <p>Change {ticker.change_percent}%</p>
        <p>Dividend {ticker.dividend}%</p>
        <p>Yield {ticker.yield}%</p>
      </div>
    </div>
  );
}

export default Tickercard