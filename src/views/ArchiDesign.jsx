import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ArchiDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = [ "Residential",  "Commercial" ,"Institutional"];
  const projects = [
    "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg",
    "/assets/450.jpg",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Added state for services visibility
  const [showAllServices, setShowAllServices] = useState(false);
  const testimonials = [
    {
      text: "Now it's easy to find nearby qualified builders with a 10-year warranty through Ducktail. I personally appreciate the Ducktail support team for their commitment. I strongly suggest that people join Ducktail as customers through the ''Join Us'' form before choosing their builders for their dream home. It's really a big help for people like us.",
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
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn't get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn't possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
    {
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn't get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn't possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
  ];

  // Services array
  const services = [
    { 
      title: "2D Site & Floor Plan", 
      description: "Detailed layouts and space planning for seamless project execution."
    },
    { 
      title: "2.5D Design", 
      image: "/path-to-restaurant.jpg",
      description: "Enhanced semi-3D views for better spatial understanding."
    },
    { 
      title: "3D Elevation Design", 
      description: "Realistic building facades with accurate textures and aesthetics."
    },
    { 
      title: "3D Walkthrough", 
      description: "Immersive real-time virtual exploration of your project."
    },
    { 
      title: "Structural Plan", 
      description: "Safe, durable frameworks with precise load-bearing details."
    },
    { 
      title: "Plumbing & Drainage Plan", 
      description: "Efficient water flow, waste management, and optimized piping layouts."
    },
    { 
      title: "Interior 2D, 3D Drawings", 
      description: "Comprehensive interior designs with detailed 2D and 3D visualizations."
    },
    { 
      title: "Electrical & Communication Plan", 
      description: "Optimized electrical layouts ensuring safety and efficiency."
    },
  ];
  // Display only first 6 services initially
  const visibleServices = showAllServices ? services : services.slice(0, 6);

  const scrollToForm = () => {
    const formSection = document.getElementById('getInTouch');
    if (formSection) {
      const yOffset = -100; // Adjust this value to control how far above the section to stop
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div>
      {/* First Section */}
      <div
        className="h-[66vh]  flex flex-col items-center justify-center text-center bg-cover  relative"
        style={{ backgroundImage: "url('/assets/archi design.png')" }}
      >        <div className="absolute inset-0 bg-black opacity-55"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
    
        {/* Content */}
        <div className="relative z-10 max-w-5xl text-white flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">  <span className="text-yellow-400">  Architectural  </span>
            Design</h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Our expert architects create functional, beautiful spaces that reflect your vision and lifestyle. Let us bring your dream home to life with designs that perfectly blend style and practicality.
          </p>
          <button 
            onClick={scrollToForm}
            className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition duration-300"
          >
            REQUEST SERVICE
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          
          <img
            src="/assets/archi sketch.png"
            alt="Interior Design"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-8 md:p-12 relative md:-ml-20 md:mt-0 mt-6 rounded-lg">
          <p className="text-gray-500 text-sm uppercase">Welcome to Archi</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
          Designing Dreams,  <br /> Building Realities
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
          At Archi Design, we turn visions into well-crafted spaces with innovative architectural solutions. From concept to execution, we deliver detailed and aesthetically refined designs. Our expertise in 2D planning, 3D elevations, walkthroughs, and structural planning ensures precision, functionality, and excellence in every project.

          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div id="getInTouch" className="px-6 md:px-16 py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left Side - Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold">Ducktail</h3>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">📞</span>
                    <p>9942728804</p>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">✉️</span>
                    <p>manothsingh1997@gmail.com</p>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">📍</span>
                    <p>Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-3/5 bg-white p-6 rounded-lg shadow-lg ml-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-2 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <select className="border border-gray-300 p-2 w-full">
                  <option value="">Select State</option>
                  <option value="state1">Tamil Nadu</option>
                  <option value="state2">Kerala</option>
                  <option value="state3">Karnataka</option>
                </select>
                
                <select className="border border-gray-300 p-2 w-full">
                  <option value="">Select District</option>
                  <option value="district1">Chennai</option>
                  <option value="district2">Coimbatore</option>
                  <option value="district3">Madurai</option>
                </select>
                
                <select className="border border-gray-300 p-2 w-full">
                  <option value="">Select Taluk</option>
                  <option value="taluk1">Taluk 1</option>
                  <option value="taluk2">Taluk 2</option>
                  <option value="taluk3">Taluk 3</option>
                </select>
              </div>
              
              <textarea 
                className="border border-gray-300 p-2 w-full mb-3" 
                placeholder="Your Message" 
                rows="3"
              ></textarea>
              
              <button className="w-full bg-black text-white p-2 hover:bg-gray-800 transition uppercase text-sm">
                Request Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - UPDATED */}
      <div className="px-6 md:px-16 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold min-w-[200px] mx-auto">SERVICES</h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            We offer a wide range of architectural design services, combining creativity and technical expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white shadow-lg flex flex-col items-start transition hover:bg-black hover:text-white hover:cursor-pointer"
              style={{
                backgroundImage: service.image ? `url(${service.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition"></div>
              <div className="relative z-10">
                <h3 className="mt-2 text-lg font-bold">{service.title}</h3>
                <p className="mt-1 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST PROJECT*/}
      <div className="px-4 md:px-16 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">LATEST PROJECTS</h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
           Our latest projects reflect our commitment to precision, aesthetics, and functionality, turning visions into reality.

          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-6 overflow-x-auto md:overflow-visible">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border transition whitespace-nowrap ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-4">
          {projects.map((image, index) => (
            <div
              key={index}
              className="w-64 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
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

export default ArchiDesign;