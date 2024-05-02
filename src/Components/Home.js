import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Building Tomorrow's Solutions, Today          </h1>
          <p className="primary-text">
           
Join our student-led team of creators and innovators. We're a group of computer science engineering students passionate about learning and building projects together. Explore our portfolio and join us as we turn ideas into reality.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
