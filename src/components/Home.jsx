import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import myImage from "../assets/profile.png";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for animation
  }, []);

  return (
    <div id="/">
      <div className="w-80 m-auto text-center py-28 md:w-3/5 md:m-auto md:py-32 xl:py-44">
        <img
          alt="profile"
          src={myImage}
          className="border rounded-full backdrop-grayscale-0 border-gray-700 w-48 h-48 m-auto md:w-60 md:h-60 hover:border-gray-900"
          data-aos="fade-up" // Apply AOS fade-up animation
        />
        <h1
          className="text-sm font-sans font-bold py-6 md:text-base"
          data-aos="fade-up"
        >
          Hello, I am Sarmad Irfan!
        </h1>
        <p
          className="font-bold text-3xl pb-12 md:text-5xl leading-10"
          data-aos="fade-up"
        >
          Experienced Software Engineer Specializing in React & React Native
        </p>
        <a
          href="https://drive.google.com/file/d/1Hg8qwQ0T9l6TLFvV2r_817w9clkuB5vD/view?usp=drive_link"
          target="blank"
        >
          <button
            type="button"
            className="hover:bg-btnHover text-center bg-btnColor border-0 py-2 px-8 focus:outline-none rounded text-lg disabled:cursor-not-allowed animate-bounceCustom"
          >
            <span>Download CV</span>
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </button>
        </a>
      </div>
      <hr className="w-4/5 m-auto border-textSecondary" data-aos="fade-up"></hr>
    </div>
  );
};

export default Home;