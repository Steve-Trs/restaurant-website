import React from "react";
import { SocialIcon } from "react-social-icons";
import "../assets/styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-description">
        <p>
          Welcome to our restaurant, where we celebrate the art of cooking and
          the joy of sharing a meal with others. Our philosophy is rooted in
          using fresh, locally-sourced ingredients to create dishes that are
          both delicious and sustainable.
        </p>
        <p>
          We believe that food is more than just sustenance - it's a way to
          connect with people and the world around us. That's why we strive to
          create a welcoming and inclusive atmosphere for all of our guests.
        </p>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="icons">
          <SocialIcon
            url="https://www.facebook.com/your-restaurant-page"
            style={{ height: 80, width: 80 }}
            network="facebook"
            bgColor="#4267B2"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/your-restaurant-page"
            style={{ height: 80, width: 80 }}
            network="instagram"
            bgColor="#E1306C"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
