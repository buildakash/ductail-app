import React from "react";
import { ToggleLeftIcon, LayoutDashboard } from "lucide-react";
import "../css/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path; // Check if the current route matches

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div
      className={` sidebar h-screen ${
        isOpen ? "w-64" : "w-0"
      } lg:w-64 text-white transition-all duration-300 fixed lg:relative z-50 overflow-y-auto py-10`}
      style={{ backgroundColor: "#1F1E1E", borderRadius: "35px" }}
    >
      <div className="flex items-center justify-between h-16 px-4 py-10 mb-5">
        {/* Logo */}
        <img
          src="/assets/Transparent background.png"
          alt="Ducktail Logo"
          className={`h-16 ${isOpen ? "block" : "hidden"} lg:block`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <ToggleLeftIcon /> : ""}
        </button>
      </div>

      {/* Navigation links */}
      <nav className={`mt-4 ${isOpen ? "block" : "hidden"} lg:block `}>
        <div
          className={`relative ${isActive("/dashboard") ? "bg-[#616161]" : ""}`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <LayoutDashboard color="#ffffff" />
          </span>
          <a
            href=" "
            onClick={() => handleNavigation("/builder/dashboard")}
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
          >
            Dashboard
          </a>
        </div>
        <div className={`relative ${isActive("/projectinvite") ? "bg-[#616161]" : ""}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/project invite 1.png"
              alt="Ducktail Logo"
              className="h-7"
            />
          </span>
          <button
            onClick={() => handleNavigation("/projectinvite")}
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
          >
            Project Invite
          </button>
        </div>
        <div className={`relative ${isActive("/projectservices") ? "bg-[#616161]" : ""}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Services2.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/projectservices")} className="block px-16 py-4 hover:bg-[#616161]">
            Services
          </a>
        </div>
        <div className={`relative ${isActive("/portfolio") ? "bg-[#616161]" : ""}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Portfolio5.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/portfolio")} className="block px-16 py-4 hover:bg-[#616161]">
            Portfolio
          </a>
        </div>
        {/* <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Job list3.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " className="block px-16 py-4 hover:bg-[#616161]">
            Jobs
          </a>
        </div> */}
        <div
          className={`relative ${
            isActive("/liveproject") ? "bg-[#616161]" : ""
          }`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
          <img
              src="/sidebaricons/Job list3.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
            onClick={() => handleNavigation("/liveproject")}
          >
            Live Project
          </button>
        </div>
        <div
          className={`relative ${
            isActive("/holdproject") ? "bg-[#616161]" : ""
          }`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/live1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
            onClick={() => handleNavigation("/holdproject")}
          >
            Hold Project
          </button>
        </div>
        <div className={`relative ${
            isActive("/pendingproject") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Time.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/pendingproject")} className="block px-16 py-4 hover:bg-[#616161]">
            Pending Projects
          </a>
        </div>
        <div className={`relative ${
            isActive("/rejectionproject") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/rejected1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/rejectionproject")} className="block px-16 py-4 hover:bg-[#616161]">
            Rejection Projects
          </a>
        </div>
        <div className={`relative ${
            isActive("/completionrequest") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/faq_1761715511.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/completionrequest")} className="block px-16 py-4 hover:bg-[#616161]">
            Completion Request
          </a>
        </div>
        <div className={`relative ${
            isActive("/completedproject") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Profile 2.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/completedproject")} className="block px-16 py-4 hover:bg-[#616161]">
            Completed Projects
          </a>
        </div>
        <div className={`relative ${
            isActive("/profile") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Profile1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <a href=" " onClick={() => handleNavigation("/profile")} className="block px-16 py-4 hover:bg-[#616161]">
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
