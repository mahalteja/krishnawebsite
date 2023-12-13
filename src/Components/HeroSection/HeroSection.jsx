import React, { useEffect } from "react";
import "./HeroSection.css";
import Hero_img from "../Assets/Hero_image.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="heading" data-aos="fade-right">
          <h1 className="heading-top"> Krishna</h1>
          <h1 className="heading-bottom">photography</h1>
        </div>

        <img src={Hero_img} alt="" data-aos="fade-up" />
        <p data-aos="fade-up">
          Tech YouTuber from Kolkata, India. I make Gadgets' unboxing and review videos. And everything related technology.
        </p>
      </div>
      <div className="hero-bottom">
        <p>order now</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="68"
          viewBox="0 0 240 68"
          fill="none"
        >
          <path
            d="M239 24.2623V1H1V67H239V50.2295"
            stroke="#898D92"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
