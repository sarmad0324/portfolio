import "../index.css";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaServicestack,
  FaFolder,
  FaEnvelope,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { TiDeleteOutline } from "react-icons/ti";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  const iconStyle = {
    width: "30px",
    height: "30px",
    marginRight: 30,
  };

  const [nav, setNav] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // Set default active tab
  const [isVisible, setIsVisible] = useState(true);

  const toggleNav = () => setNav((prev) => !prev);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset < 80); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-20 flex justify-between px-10 items-center align-baseline bg-background border-b border-textSecondary navbar ${
        isVisible ? "" : "navbar--hidden"
      }`}
    >
      <div className="flex justify-center items-center md:px-14 space-x-4">
        <a
          className="text-textSecondary transform transition-transform duration-300 hover:scale-150"
          href="https://www.linkedin.com/in/sarmad-irfan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={iconStyle} />
        </a>

        <a
          className="text-textSecondary transform transition-transform duration-300 hover:scale-150"
          href="https://github.com/sarmad0324"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={iconStyle} />
        </a>
        <a
          className="text-textSecondary transform transition-transform duration-300 hover:scale-150"
          href="https://www.upwork.com/freelancers/~0161540cf3f5067ec5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faUpwork} style={iconStyle} />
        </a>
      </div>

      <nav
        className={`${
          nav ? "block" : "hidden md:flex md:items-center md:gap-10 md:pr-14"
        } absolute bg-[#04151f] top-20 left-0 right-0 md:static z-50 p-5`}
      >
        <a
          href="#/"
          className={`font-semibold flex items-center pt-4 transition-transform duration-300 md:pt-0 hover:text-btnColor ${
            activeTab === "home"
              ? "border-b-2 border-btnColor text-btnColor"
              : ""
          }`}
          onClick={() => {
            setActiveTab("home");
            setNav(false);
          }}
        >
          <FaHome className="mr-2" /> Home
        </a>
        <a
          href="#services"
          className={`font-semibold flex items-center pt-4 transition-transform duration-300 md:pt-0 hover:text-btnColor ${
            activeTab === "services"
              ? "border-b-2 border-btnColor text-btnColor"
              : ""
          }`}
          onClick={() => {
            setActiveTab("services");
            setNav(false);
          }}
        >
          <FaServicestack className="mr-2" /> Services
        </a>
        <a
          href="#project"
          className={`font-semibold flex items-center pt-4 transition-transform duration-300 md:pt-0 hover:text-btnColor ${
            activeTab === "projects"
              ? "border-b-2 border-btnColor text-btnColor"
              : ""
          }`}
          onClick={() => {
            setActiveTab("projects");
            setNav(false);
          }}
        >
          <FaFolder className="mr-2" /> Projects
        </a>
        <a
          href="#contact"
          className={`font-semibold flex items-center pt-4 transition-transform duration-300 md:pt-0 hover:text-btnColor ${
            activeTab === "contact"
              ? "border-b-2 border-btnColor text-btnColor"
              : ""
          }`}
          onClick={() => {
            setActiveTab("contact");
            setNav(false);
          }}
        >
          <FaEnvelope className="mr-2" /> Contact
        </a>
      </nav>

      <div className="text-center md:hidden flex justify-center">
        {nav ? (
          <TiDeleteOutline
            onClick={toggleNav}
            className="hover:text-btnColor text-xl"
          />
        ) : (
          <HiMiniBars3CenterLeft
            onClick={toggleNav}
            className="hover:text-btnColor text-xl"
          />
        )}
      </div>
    </header>
  );
};

export default Header;