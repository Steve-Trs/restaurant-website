import React from "react";
import "../assets/styles/allday.css";
import homefood from "../assets/img/homefood.png";

function AllDay() {
  return (
    <>
      <div className="allday">
        <h1 className="allday-title"> All Day Menu</h1>
        <h2 className="allday-subtitle">From 11am to 10pm</h2>
        <div className="allday-card-container">
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 1</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 2</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 3</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 4</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 5</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 6</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
          <div className="allday-card">
            <img src={homefood} alt="photo" />
            <div className="bf-text">
              <h3 className="bf-img-title">name 7</h3>
              <p className="bf-desc">
                Lorem ipsum dolor sit, hut amet consectetur adipisicing elit.
                Excepturi quibusdam cum amet. Magnam et numquam amet, placeat
              </p>
            </div>
            <p className="bf-price">$$.$$</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllDay;
