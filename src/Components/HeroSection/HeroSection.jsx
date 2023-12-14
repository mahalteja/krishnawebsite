import React, { useEffect } from "react";
import "./HeroSection.css";
import Hero_img1 from "../Assets/Hero_image1.png";
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

        <img src={Hero_img1} alt="" data-aos="fade-up" />
        <p data-aos="fade-up">
          Hi! I am Krishna I am Photographer. I'll take the stunning images at your Wedding, Birthday functions etc.. I capture the moments comes through Lens.
        </p>
      </div>
      <div className="hero-bottom" >
        <p onClick={()=>{
          window.location.href= "tel:+918074187798"
        }} >order now</p>
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
