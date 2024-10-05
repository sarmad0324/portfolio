import React, { useEffect } from "react";
import "../index.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Card = (props) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration of the fade-in effect
  }, []);

  return (
    <>
      <div
        className="w-11/12 mx-auto mb-10 rounded-xl  flex flex-wrap justify-center gap-14"
        data-aos="fade-up" // Apply AOS fade-in effect
      >
        <div className="h-full rounded-xl overflow-hidden bg-btnHover">
          <img
            className="h-52 lg:h-60 md:h-48 2xl:h-72 w-[96%] m-auto  pt-2  object-cover object-center hover:border-gray-400"
            src={props.img}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-xl mb-3 font-bold ">
              {props.title}
            </h1>
            <p className="leading-relaxed mb-3 text-textSecondary text-start">
              {props.detail}
            </p>
            <div className="flex items-center flex-wrap">
              <a
                className="inline-flex items-center md:mb-2 lg:mb-0 text-btnColor hover:border-b hover:border-btnColor"
                href={props.link}
                target="blank"
              >
                Link
                <svg
                  className="w-4 h-4 ml-2 animate-arrow"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;