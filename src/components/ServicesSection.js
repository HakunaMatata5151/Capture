import React from "react";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="desription">
        <h2>
          High <span>quaity</span>services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="A clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="A teamwork" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="A diaphragm" />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="A money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={home2} alt="" />
      </div>
    </div>
  );
}

export default ServicesSection;
