import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";
import useFindBuilderStore from "../store/useFindBuilderStore";
import { useNavigate, useLocation } from "react-router-dom";

const Homepage = () => {
  const [fontSize, setFontSize] = useState(
    window.innerWidth < 768 ? "30px" : "55px"
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { token, userType } = useAuthStore();
  const {
    states,
    districts,
    taluks,
    fetchLocationData,
    setSelectedState,
    setSelectedDistrict,
    setSelectedTaluk,
  } = useFindBuilderStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setLocalState] = useState("");
  const [selectedDistrict, setLocalDistrict] = useState("");
  const [selectedTaluk, setLocalTaluk] = useState("");

  const handleFind = () => {
    setSelectedState(selectedState);
    setSelectedDistrict(selectedDistrict);
    setSelectedTaluk(selectedTaluk);
    setIsOpen(false);
    navigate("/builderslist");
  };

  useEffect(() => {
    // Check if redirected from login/signup & auto-open the modal
    if (location.state?.fromAuth && token && userType === "customer") {
      setIsOpen(true);
    }
    if (userType === "customer") {
      fetchLocationData();
    }
  }, [location, token, userType, fetchLocationData]);

  const handleFindBuilderClick = () => {
    const user = useAuthStore.getState().user; // Check if user is logged in

    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/"); // Store correct path
      toast.error(
        "Please log in to continue with the builder selection process."
      );
      navigate("/signup"); // Redirect to signup
    } else {
      setIsOpen(true); // Open builder selection modal
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/assets/Ducktail-latest-project.jpg",
      colSpan: "md:col-span-2", // First photo spans 2 columns
    },
    {
      id: 2,
      src: "/assets/Ducktail-Latest-project-3.jpg",
      colSpan: "md:col-span-1", // Second photo spans 1 column
    },
    {
      id: 3,
      src: "/assets/Ducktail-Latest-project-2.jpg",
      colSpan: "md:col-span-1", // Third photo spans 1 column
    },
  ];

  const testimonials = [
    {
      text: "Now it’s easy to find nearby qualified builders with a 10-year warranty through Ducktail. I personally appreciate the Ducktail support team for their commitment. I strongly suggest that people join Ducktail as customers through the ''Join Us'' form before choosing their builders for their dream home. It’s really a big help for people like us.",
      name: "Abdul Rahman",
      role: "School teacher",
      rating: 5,
    },
    {
      text: " I learned about Ducktail during its trial phase, even before it officially launched. At first, I had doubts since it was a new platform, but I decided to try it for my house construction. The builder (Habriq Constitution) they suggested was very professional, and the Ducktail team provided full support throughout. Their customer dashboard is very good, with all the details like the 10-year warranty, the documents I signed, and communications with the builder during the project. Now, my house is finished exactly how I wanted, and I feel happy to be one of their early customers.",
      name: "Kishaly ",
      role: "Psychologist",
      rating: 5,
    },
    {
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn’t get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn’t possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
    {
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn’t get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn’t possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "30px" : "55px");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-[72vh]  flex flex-col items-center justify-center text-center bg-cover  relative"
        style={{ backgroundImage: "url('/assets/Ducktail-Banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="relative z-10 text-white">
          <h1
            className="font-bold mb-2"
            style={{
              fontSize,
            }}
          >
            DUCKTAIL – The Construction Platform
          </h1>
          <p className="text-lg md:text-xl">
            Connecting you with Verified and Qualified Builders - Ensuring
            Trust, Quality, and Seamless Construction Experience
          </p>
          <p className="text-lg md:text-xl mb-6">
            Now, it’s easier than ever to find qualified and trustworthy
            builders near you with Ducktail
          </p>
          <div className="flex items-center justify-center space-x-5">
            <button
              className="px-7 py-3 bg-blue-600 text-sm text-white font-bold rounded-full hover:bg-blue-700"
              onClick={handleFindBuilderClick}
            >
              FIND BUILDERS
            </button>
            {/* <button className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
              <div className="absolute inset-0 rounded-full bg-black animate-borderExplode"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 z-10 relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.4-4.267A1 1 0 007 7.73v8.538a1 1 0 001.352.936l6.4-3.2a1 1 0 000-1.736z"
                />
              </svg>
            </button> */}
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-black text-xl font-bold hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>

              {/* Modal Content */}
              <h2 className="text-lg sm:text-xl font-bold text-center mb-1">
                Simplifying Your Building Journey
              </h2>
              <p className="text-center text-gray-600 mb-4 text-xs sm:text-sm">
                Connecting Dreams with Builders!
              </p>
              <hr className="border-gray-200 mb-4" />

              <h3 className="text-sm sm:text-lg font-semibold text-center mb-4">
                Find The Best Builders
              </h3>

              {/* Dropdowns */}
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-3/4 sm:w-2/3">
                    {/* <label className="text-xs sm:text-sm font-medium">State</label> */}
                    <select
                      className="w-full border px-3 py-2 rounded-md"
                      value={selectedState}
                      onChange={(e) => setLocalState(e.target.value)}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-3/4 sm:w-2/3">
                    {/* <label className="text-xs sm:text-sm font-medium">District</label> */}
                    <select
                      className="w-full border px-3 py-2 rounded-md"
                      value={selectedDistrict}
                      onChange={(e) => setLocalDistrict(e.target.value)}
                      disabled={!selectedState}
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-3/4 sm:w-2/3">
                    {/* <label className="text-xs sm:text-sm font-medium">Taluk</label> */}
                    <select
                      className="w-full border px-3 py-2 rounded-md"
                      value={selectedTaluk}
                      onChange={(e) => setLocalTaluk(e.target.value)}
                      disabled={!selectedDistrict}
                    >
                      <option value="">Select Taluk</option>
                      {taluks.map((taluk) => (
                        <option key={taluk} value={taluk}>
                          {taluk}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700"
                  onClick={handleFind}
                >
                  FIND
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Next Section */}
      <div className="py-3  flex justify-center">
        <div className="border border-gray-300 shadow-lg p-2 rounded-lg bg-white max-w-6xl text-center">
          <p className="text-gray-700 text-lg">
            Build your dream project with ease and confidence – Ducktail
            connects you to verified builders, guarantees quality with a 10-year
            warranty, and ensures a seamless construction experience.
          </p>
          <p className="font-normal text-xl">
            To avail the full benefits of DUCKTAIL –{" "}
            <span>
              <a
                href=" "
                className="text-blue-600 font-bold text-[18px] underline mt-2 inline-block"
              >
                "JOIN US FOR FREE"
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="fixed right-2 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {[
          {
            icon: faFacebookF,
            href: "https://www.facebook.com",
            color: "bg-blue-600",
            name: "Facebook",
          },
          {
            icon: faInstagram,
            href: "https://www.instagram.com",
            color: "bg-pink-600",
            name: "Instagram",
          },
          {
            icon: faLinkedin,
            href: "https://www.linkedin.com",
            color: "bg-blue-500",
            name: "Linkedin",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group flex items-center justify-end"
          >
            {/* Text (Appears on hover) */}
            <span
              className={`absolute right-14 top-0 h-full flex items-center px-3 rounded-md text-white ${item.color} 
      opacity-0 transform -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}
            >
              {item.name}
            </span>

            {/* Icon */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} w-11 h-11 flex items-center justify-center text-white rounded-full shadow-lg transition`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
            </a>
          </div>
        ))}
      </div>

<section id="services" className="py-6">
  <div className="container max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
      DUCKTAIL'S OTHER SERVICES
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 py-5">
      {[
        {
          title: "Home Loan",
          img: "/assets/Home-Loan.jpg",
          link: "/homeloan",
          comingSoon: false,
        },
        {
          title: "Archi - Design",
          img: "/assets/art-design.jpg",
          link: "/archidesign",
          comingSoon: false,
        },
        {
          title: "Customer Support",
          img: "/assets/Customer-Support.jpg",
          link: "/support",
          comingSoon: false,
        },
        {
          title: "Housing Plots",
          img: "/assets/Untitled-design-36.jpg",
          comingSoon: true,
        },
        {
          title: "Construction Consultation",
          img: "/assets/Consulting.png",
          link: "/constructionconsultation",
          comingSoon: false,
        },
        {
          title: "Landscaping",
          img: "/assets/450.jpg",
          link: "/landscaping",
          comingSoon: false,
        },
        {
          title: "Commercial Construction",
          img: "/assets/2964.jpg",
          link: "/premiumconstruction",
          comingSoon: false,
        },
        {
          title: "Interior Designers",
          img: "/assets/Interior-Design.png",
          comingSoon: true,
        },
      ].map((service, index) => (
        <Link to={service.link || "#"} key={index} className="group h-full">
          <div className="bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 overflow-hidden text-center cursor-pointer border flex flex-col h-full relative">
            {service.comingSoon && (
              <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs z-10 rounded-tl-2xl">
                Coming Soon
              </div>
            )}
            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover transform transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col items-center justify-center text-center">
              <h3 className="font-medium text-base">{service.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>



      {/* tile 1 */}
      <section className="relative py-4 flex justify-center">
        <div
          className="relative max-w-6xl w-full rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/assets/Ducktail-home-loan.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            zIndex: -1,
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffaf53", // Yellow overlay color from the image
              opacity: 0.5, // Adjust for desired transparency
              zIndex: 1,
            }}
          ></div>

          <div
            className="relative container mx-auto px-6 sm:px-12 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between py-8">
              {/* Text Content */}
              <div className="text-left max-w-[28rem] lg:max-w-[42rem]">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                  Turn Your Dream Home into Reality with Our Easy Home Loans!
                </h2>
              </div>

              {/* Button */}
              <div className="mt-4 lg:mt-0">
                <a
                  href=" "
                  className="inline-block bg-blue-600 text-white font-semibold text-xs sm:text-sm py-2 px-5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  APPLY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service 2 */}
      <section className="py-7">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            WHY CHOOSE DUCKTAIL
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {[
              {
                title: "10 Years Warranty",
                img: "/assets/Ducktail-10-years-warrenty-1 (1).png",
              },
              {
                title: "Ducktail Verified Builders",
                img: "/assets/Ducktail-verified-builders.png",
              },
              {
                title: "Customer Support",
                img: "/assets/Support-service.png",
              },
              {
                title: "Organized System",
                img: "/assets/organised-service.png",
              },
              {
                title: "Easy Home Loan",
                img: "/assets/Easy-home-loan.png",
              },
              {
                title: "Customer Log-in Dashboard",
                img: "/assets/Customer-login.png",
                large: true,
              },
              {
                title: "One Stop Solution",
                img: "/assets/One-stop-solution.png",
              },
              {
                title: "Certified Builders",
                img: "/assets/Certified-builders.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md md:p-4 p-6 text-center hover:shadow-lg transition-shadow duration-300 relative"
              >
                {index === 0 && (
                  <span className="absolute top-2 right-2 text-xs text-black">*T&C apply</span>
                )}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`mx-auto mb-1 transform transition-transform duration-300 hover:scale-110 ${
                      item.large ? "w-24 h-20" : "w-20 h-20"
                    }`}
                  />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tile 2 */}
      <section className="relative py-12 flex justify-center">
        <div
          className="relative max-w-6xl w-full rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/assets/Ducktail-clients.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            zIndex: -1,
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#a1a09f", // Yellow overlay color from the image
              opacity: 0.5, // Adjust for desired transparency
              zIndex: 1,
            }}
          ></div>

          <div
            className="relative container mx-auto px-6 sm:px-12 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between py-8">
              {/* Text Content */}
              <div className="text-left max-w-md lg:max-w-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  Get into the world of clients
                </h2>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  Register Your Construction Company
                </h2>
              </div>

              {/* Button */}
              <div className="mt-4 lg:mt-0">
                <a
                  href=" "
                  className="inline-block bg-blue-600 text-white font-semibold text-xs py-2 px-5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  APPLY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className=" py-1">
        <div className="container max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            LATEST PROJECTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {/* Render images */}
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative group ${image.colSpan} transition-all duration-500`}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>

                {/* "+" Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500 w-12 h-12 rounded-full border-2 border-white  text-white text-2xl flex items-center justify-center"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative  rounded-lg p-10">
              <button
                className="absolute top-1 right-1 text-white text-3xl font-bold "
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected Project"
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* tile 3 */}
      <section className="relative py-14 flex justify-center">
        <div
          className="relative  w-full  overflow-hidden"
          style={{
            backgroundImage: `url('/assets/ducktails-job.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",

            zIndex: -1,
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#232322c7", // Yellow overlay color from the image
              opacity: 0.5, // Adjust for desired transparency
              zIndex: 1,
            }}
          ></div>

          <div
            className="relative container max-w-6xl mx-auto px-6 sm:px-12 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col  py-16">
              {/* Text Content */}
              <div className="text-left max-w-md  lg:max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Finding your dream job is now easier with Ducktail!
                </h2>
              </div>

              {/* Button */}
              <div className="mt-6 lg:mt-0">
                <a
                  href=" "
                  className="inline-block bg-blue-600 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  APPLY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonal */}
      <section className="py-0">
  <div className="container max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">
      OUR TESTIMONIALS
    </h2>
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 1 },
      }}
      className="w-full md:h-[340px]"
    >
      {Array.from(
        { length: Math.ceil(testimonials.length / 2) },
        (_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-wrap md:flex-nowrap justify-around items-start gap-6">
              {/* First Testimonial */}
              <div className="w-full md:w-1/2 md:h-[300px] bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-700 italic mb-3 text-center">
                  {testimonials[index * 2]?.text}
                </p>
                <div className="flex justify-center mb-2">
                  {Array.from(
                    { length: testimonials[index * 2]?.rating || 0 },
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.09 3.26 1.93-6.36-5.09-3.74h6.3L10 2.5 12.95 8.16h6.3l-5.09 3.74 1.93 6.36z" />
                      </svg>
                    )
                  )}
                </div>
                <h4 className="text-base font-semibold text-gray-800 text-center">
                  {testimonials[index * 2]?.name}
                </h4>
                <p className="text-xs text-gray-600 text-center">
                  {testimonials[index * 2]?.role}
                </p>
              </div>

              {/* Second Testimonial */}
              {testimonials[index * 2 + 1] && (
                <div className="w-full md:w-1/2 md:h-[300px] bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-700 italic mb-3 text-center">
                    {testimonials[index * 2 + 1]?.text}
                  </p>
                  <div className="flex justify-center mb-2">
                    {Array.from(
                      {
                        length: testimonials[index * 2 + 1]?.rating || 0,
                      },
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.09 3.26 1.93-6.36-5.09-3.74h6.3L10 2.5 12.95 8.16h6.3l-5.09 3.74 1.93 6.36z" />
                        </svg>
                      )
                    )}
                  </div>
                  <h4 className="text-base font-semibold text-gray-800 text-center">
                    {testimonials[index * 2 + 1]?.name}
                  </h4>
                  <p className="text-xs text-gray-600 text-center">
                    {testimonials[index * 2 + 1]?.role}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  </div>
</section>

    </div>
  );
};

export default Homepage;
