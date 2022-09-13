import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import Tickercard from "../../components/tickercard/tickercard";
import { getTickers } from "../../redux/reducers/reducer";
import "./main.css";

let socket;

const Main = () => {
  const ENDPOINT = "localhost:4000";
  const dispatch = useDispatch();
  const [direction, setDirection] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [interval, setInterval] = useState('5000')
  const arrOfIntervals = ['1', '3', '5', '10']

  useEffect(() => {
    if (toggle) {
       socket = io(ENDPOINT);
       socket.emit("start");
       socket.on("ticker", (response) => {
         dispatch(getTickers(response));
       });
    }
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, toggle, interval]);

  const tickers = useSelector((store) => store.reducer.tickers);

  useEffect(() => {
    setDirection(!direction);
  }, [tickers]);

  const handlerButton = async (time) => {
    await axios(`/api/v1/${time}`)
    setInterval(time)
  }

  return (
    <div className="dashboard">
      <div className="dashboard__buttonfield">
        <button type="button" onClick={()=>{setToggle(!toggle)}}>{toggle ? 'Stop' : 'Go'}</button>
        {toggle && <div className="dashboard__buttonfield__time">
          Time interval:
          {arrOfIntervals.map((it) => {
            return (
              <button type='button' name={it*1000} className={interval === `${it*1000}` ? "dashboard__buttonfield__time-active" : ""} onClick={(e)=>{handlerButton(e.target.name)}}>{it}</button>
            )
          })}
        </div>}
      </div>
      <div className="dashboard__cardfield">
        {Object.keys(tickers).length > 0 ? (
          Object.values(tickers).map((ticker) => {
            return (
              <div key={ticker.ticker} className="dashboard__cardfield__card">
                <Tickercard ticker={ticker} direction={direction} />
              </div>
            );
          })
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
};

export default Main;
