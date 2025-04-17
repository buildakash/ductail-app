import React, { useEffect, useState } from "react";
import { ToggleLeftIcon } from "lucide-react";
import "../../css/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import useProjectStatus from "../../store/builders/useProjectStatus";
import useProjectEnqStore from "../../store/customer/useProjectEnqStore";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { projects, fetchProjects } = useProjectStatus();
  const { fetchCustomerEnquiries } = useProjectEnqStore();
  const [notifications, setNotifications] = useState({
    live: false,
    hold: false,
    rejected: false,
    completion: false,
    completed: false,
    invite: false
  });

  const isActive = (path) => location.pathname === path;

  // Fetch data periodically
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchProjects(),
        fetchCustomerEnquiries()
      ]);
    };

    fetchData(); // Initial fetch

    // Set up polling interval
    const interval = setInterval(fetchData, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }, [fetchProjects, fetchCustomerEnquiries]);

  // Update notifications based on fetched data
  useEffect(() => {
    if (projects && projects.length > 0) {
      setNotifications(prev => ({
        ...prev,
        live: projects.some(p => p.status === 'active'),
        hold: projects.some(p => p.status === 'hold'),
        rejected: projects.some(p => p.status === 'rejected'),
        completion: projects.some(p => p.status === 'pending_completion'),
        completed: projects.some(p => p.status === 'completed')
      }));
    }
  }, [projects]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const NotificationDot = () => (
    <span className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-white rounded-full animate-pulse"></span>
  );

  return (
    <div
      className={` sidebar h-screen ${
        isOpen ? "w-64" : "w-0"
      } lg:w-64 text-white transition-all duration-300 fixed lg:relative z-50 overflow-y-auto py-10`}
      style={{ backgroundColor: "#1F1E1E", borderRadius: "35px" }}
    >
      <div className="flex items-center justify-between h-16 px-4 py-10 mb-5">
        {/* Logo with click handler */}
        <img
          src="/assets/Transparent background.png"
          alt="Ducktail Logo"
          className={`h-16 ${isOpen ? "block" : "hidden"} lg:block cursor-pointer`}
          onClick={() => navigate("/")}
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
        
        <div className={`relative ${isActive("/projectinvite") ? "bg-[#616161]" : ""}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/project invite 1.png"
              alt="Ducktail Logo"
              className="h-7"
            />
          </span>
          {notifications.invite && <NotificationDot />}
          <button
            onClick={() => handleNavigation("/projectinvite")}
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
          >
            Project Invite
          </button>
        </div>

        <div
          className={`relative ${
            isActive("/livecard" ) ? "bg-[#616161]" : ""
          }`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
          <img
              src="/sidebaricons/Job list3.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          {notifications.live && <NotificationDot />}
          <button
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
            onClick={() => handleNavigation("/livecard" )}
          >
            Live Project
          </button>
        </div>

        <div
          className={`relative ${
            isActive("/holdcard") ? "bg-[#616161]" : ""
          }`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/live1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          {notifications.hold && <NotificationDot />}
          <button
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
            onClick={() => handleNavigation("/holdcard")}
          >
            Hold Project
          </button>
        </div>

        <div className={`relative ${
            isActive("/rejectcard" ) ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/rejected1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          {notifications.rejected && <NotificationDot />}
          <a href=" " onClick={() => handleNavigation("/rejectcard" )} className="block px-16 py-4 hover:bg-[#616161]">
            Rejection Projects
          </a>
        </div>

        <div className={`relative ${
            isActive("/requestcard") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/faq_1761715511.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          {notifications.completion && <NotificationDot />}
          <a href=" " onClick={() => handleNavigation("/requestcard")} className="block px-16 py-4 hover:bg-[#616161]">
            Completion Request
          </a>
        </div>

        <div className={`relative ${
            isActive("/completedcard") ? "bg-[#616161]" : ""
          }`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 ">
            <img
              src="/sidebaricons/Profile 2.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          {notifications.completed && <NotificationDot />}
          <a href=" " onClick={() => handleNavigation("/completedcard")} className="block px-16 py-4 hover:bg-[#616161]">
            Completed Projects
          </a>
        </div>

        <div className={`relative ${
            isActive("/customer") ? "bg-[#616161]" : ""
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
