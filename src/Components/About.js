import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Student minds, endless possibilities: Discover our story        </h1>
        <p className="primary-text">
        We are a team of computer science engineering students brought together by our shared passion for technology and innovation. What started as a group of classmates has evolved into a close-knit team, learning, collaborating, and growing together.
        </p>
        <p className="primary-text">
        Our journey is fueled by curiosity, creativity, and a drive to make a difference. Join us as we continue to explore new technologies, build meaningful projects, and shape the future of technology.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
