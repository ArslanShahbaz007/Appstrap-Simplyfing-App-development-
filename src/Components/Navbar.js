import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SiConvertio } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";

import "./NavbarStyles.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 769px)");

    function handleScreenWidthChange(mq) {
      if (mq.matches) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    handleScreenWidthChange(mq);

    const handleMediaQueryChange = (event) => {
      handleScreenWidthChange(event.target);
    };

    mq.addEventListener("change", handleMediaQueryChange);

    return () => {
      mq.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "center", margin: "4px" }}
        >
          <SiConvertio color="white" size={38} />
          <p
            style={{
              marginLeft: "10px",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            AppStrap
          </p>
        </NavLink>

        <div>
          {isOpen ? (
            <ul id="navitems">
              <li>
                <NavLink to="/" className="items">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/components" className="items">
                  Components
                </NavLink>
              </li>
              <li>
                <NavLink to="/templates" className="items">
                  Templates
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="items">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="items">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="items ">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="items flex items-center gap-2">
                  <FaSignInAlt className="text-lg " />
                  <span>Login</span>
                </NavLink>
              </li>

              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search "
                    required=""
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div id="mobile">
          {isOpen ? (
            <IoClose className="icon" size={24} onClick={toggleIcon} />
          ) : (
            <FaBars className="icon" size={24} onClick={toggleIcon} />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
