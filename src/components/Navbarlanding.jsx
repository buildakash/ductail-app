import React, { useState, useEffect, useRef } from "react";
import "../css/Navbarlanding.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbarlanding = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loginDropdownOpen, setloginDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Create refs for the dropdown containers
  const joinUsRef = useRef(null);
  const loginRef = useRef(null);

  useEffect(() => {
    // Handle clicks outside dropdowns
    const handleClickOutside = (event) => {
      if (joinUsRef.current && !joinUsRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setloginDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setloginDropdownOpen(false); // Close login dropdown when join us is opened
  };

  const loginToggle = () => {
    setloginDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false); // Close join us dropdown when login is opened
  };

  const handleLoginRedirect = (userType) => {
    localStorage.setItem("redirectAfterLogin", location.pathname);
    navigate(`/login?type=${userType}`);
    setIsDropdownOpen(false);
    setloginDropdownOpen(false);
  };
  
  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 1000);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleActiveLink = (navlink, event) => {
    event.preventDefault();
    setActiveLink(navlink);
    setIsDropdownOpen(false);
    setloginDropdownOpen(false);
  };

  const scrollToServices = () => {
    navigate("/");
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const yOffset = servicesSection.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }, 100);
    setActiveLink("SERVICES");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Further adjusted: more left, less height */}
          <div className="flex-shrink-0 -ml-4 sm:-ml-16 md:-ml-32">
            <img
              src="/assets/white background.jpg"
              alt="Ducktail"
              className="h-10 sm:h-16 w-auto cursor-pointer"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-3 items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                window.scrollTo(0, 0);
                handleActiveLink("HOME", e);
              }}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "HOME" ? "text-gray-500" : "text-black"
              }`}
            >
              HOME
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "SERVICES" ? "text-gray-500" : "text-black"
              }`}
            >
              SERVICES
            </a>

            {/* JOIN US Dropdown */}
            <div className="relative" ref={joinUsRef}>
              <button
                onClick={toggleDropdown}
                className="relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100"
              >
                JOIN US
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-gray-100 rounded shadow-lg">
                  <button
                    onClick={() => handleLoginRedirect("builder")}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Builder
                  </button>
                  <button
                    onClick={() => handleLoginRedirect("customer")}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Customer
                  </button>
                </div>
              )}
            </div>

            <a
              href="/jobportal"
              onClick={(e) => {
                e.preventDefault();
                // navigate('/jobportal');
                handleActiveLink("CAREER", e);
              }}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "CAREER" ? "text-gray-500" : "text-black"
              }`}
            >
            JOB PORTAL
            </a>
            <a
              href="/support"
              onClick={(e) => {
                e.preventDefault();
                navigate('/support');
                handleActiveLink("SUPPORT", e);
              }}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "SUPPORT" ? "text-gray-500" : "text-black"
              }`}
            >
              SUPPORT
            </a>
          </div>

          {/* Login Button (Triggers Dropdown) */}
          <div className="hidden md:flex items-center" ref={loginRef}>
            <button
              onClick={loginToggle}
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-700"
            >
              LOGIN
            </button>
            {loginDropdownOpen && (
              <div className="absolute mt-36 bg-gray-100 rounded shadow-lg">
                <button
                  onClick={() => handleLoginRedirect("builder")}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                >
                  Builder
                </button>
                <button
                  onClick={() => handleLoginRedirect("customer")}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                >
                  Customer
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {!isMobileMenuOpen && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu-overlay">
          <div className={`black-shade ${isClosing ? "slide-out" : ""}`}></div>
          <div className={`menu-content ${isClosing ? "slide-out" : ""}`}>
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                window.scrollTo(0, 0);
                toggleMenu();
              }} 
              className="block mt-8 text-black font-bold"
            >
              HOME
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
                toggleMenu();
              }}
              className="block mt-4 text-black font-bold"
            >
              SERVICES
            </a>

            {/* JOIN US in Mobile Menu */}
            <div className="mt-4">
              <button onClick={toggleDropdown} className="text-black font-bold">
                JOIN US
              </button>
              {isDropdownOpen && (
                <div className="bg-gray-100 rounded shadow-lg p-2">
                  <button
                    onClick={() => {
                      handleLoginRedirect("builder");
                      toggleMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Builder
                  </button>
                  <button
                    onClick={() => {
                      handleLoginRedirect("customer");
                      toggleMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Customer
                  </button>
                </div>
              )}
            </div>
            <a 
              href="/jobportal"
              onClick={(e) => {
                e.preventDefault();
                navigate('/jobportal');
                toggleMenu();
              }}
              className="block mt-4 text-black font-bold"
            >
              CAREER
            </a>
            <a 
              href="/support"
              onClick={(e) => {
                e.preventDefault();
                navigate('/support');
                toggleMenu();
              }}
              className="block mt-4 text-black font-bold"
            >
              SUPPORT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarlanding;