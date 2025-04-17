import React, { useState, useEffect } from 'react';

const PremiumConstruction = () => {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    taluk: "",
    postcode: "",
    state: "",
    query: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for dropdowns
  const states = ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"];
  const districts = {
    "Kerala": ["Thiruvananthapuram", "Ernakulam", "Kozhikode", "Thrissur", "Kottayam"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tirunelveli"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"]
  };
  const taluks = {
    "Thiruvananthapuram": ["Neyyattinkara", "Kattakada", "Chirayinkeezhu", "Nedumangadu", "Varkala"],
    "Ernakulam": ["Aluva", "Kanayannur", "Kochi", "Kothamangalam", "Kunnathunad"],
    "Chennai": ["Ambattur", "Egmore", "Guindy", "Mylapore", "T. Nagar"],
    "Bangalore": ["Bangalore North", "Bangalore South", "Yelahanka", "K.R. Pura", "Bangalore East"],
    "Mumbai": ["Andheri", "Borivali", "Kurla", "Bandra", "Dadar"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Apply input restrictions
    if (name === "name") {
      newValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === "phone" || name === "postcode") {
      newValue = value.replace(/\D/g, '');
      if (name === "phone" && newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
      if (name === "postcode" && newValue.length > 6) {
        newValue = newValue.slice(0, 6);
      }
    } else if (name === "email") {
      newValue = value.toLowerCase();
    }

    setFormData(prev => ({ 
      ...prev, 
      [name]: newValue,
      ...(name === "state" ? { district: "", taluk: "" } : {}),
      ...(name === "district" ? { taluk: "" } : {})
    }));
  };

  const getAvailableDistricts = () => {
    return formData.state ? districts[formData.state] || [] : [];
  };

  const getAvailableTaluks = () => {
    return formData.district ? taluks[formData.district] || [] : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div
        className="h-[66vh] flex flex-col items-center justify-center text-center bg-cover relative"
        style={{ backgroundImage: "url('/assets/Premium.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-[80vh] flex items-center px-6 py-12">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Title Section */}
              <div className="text-white flex-1 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-5">
                  <span className="text-yellow-400">  Commercial </span>
                 Construction
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                  With Ducktail's premium construction services, we craft residential, commercial, and sustainable spaces that blend expert craftsmanship with innovative design to bring your vision to life.
                </p>
              </div>

              {/* Form Section */}
              <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name *" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email *" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number *" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <select 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select State *</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <select 
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={!formData.state}
                  >
                    <option value="">Select District *</option>
                    {getAvailableDistricts().map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  <select 
                    name="taluk"
                    value={formData.taluk}
                    onChange={handleChange}
                    className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={!formData.district}
                  >
                    <option value="">Select Taluk *</option>
                    {getAvailableTaluks().map(taluk => (
                      <option key={taluk} value={taluk}>{taluk}</option>
                    ))}
                  </select>
                  <input 
                    type="text"
                    name="postcode"
                    placeholder="Postcode *"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="col-span-2 w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea 
                    name="query"
                    placeholder="Your Query *" 
                    value={formData.query}
                    onChange={handleChange}
                    rows="2" 
                    className="col-span-2 w-full p-2 h-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                  <button 
                    type="submit"
                    className="col-span-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Service Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Construction Types Section */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Commercial Construction Services </h2>
          <div className={`space-y-8 ${showMore ? '' : 'max-h-[60vh] overflow-hidden'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>1. Luxury Residential Construction</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Custom Homes:</strong> Tailored to your exact specifications, our custom homes are designed with high-end finishes and premium materials, featuring advanced technology like smart home systems that elevate convenience and comfort.</li>
                <li><strong>High-End Apartments and Condominiums:</strong> We create luxurious apartments and condos with top-tier amenities, including fitness centers, swimming pools, panoramic views, and prime location advantages.</li>
                <li><strong>Estate Homes:</strong> For those seeking ultimate luxury, we build expansive estate homes on large plots of land, complete with private pools, home theaters, gardens, and other opulent features that cater to your every need.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>2. Commercial Premium Construction</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Luxury Hotels and Resorts:</strong> We design five-star hotels and resorts that offer world-class services, including spas, gourmet restaurants, and luxury suites, all crafted with the finest materials and attention to detail.</li>
                <li><strong>Corporate Headquarters:</strong> Our premium office buildings are designed to foster productivity and comfort, featuring high-end finishes, modern technology, and energy-efficient systems for a sustainable, state-of-the-art work environment.</li>
                <li><strong>Retail Flagship Stores:</strong> For high-end brands, we create premium commercial spaces with exclusive architectural features and custom-designed interiors that reflect the brand's identity and cater to a luxury clientele.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>3. Premium Green or Sustainable Construction</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Eco-Luxury Homes:</strong> Ducktail embraces eco-friendly construction by building homes with sustainable materials and energy-efficient designs. Our homes include features such as solar panels, rainwater harvesting systems, and advanced insulation to minimize environmental impact while offering the luxury of modern living.</li>
                <li><strong>LEED-Certified Buildings:</strong> We create green commercial buildings that meet LEED certification standards, utilizing energy-efficient construction methods and sustainable practices to deliver high-performance, environmentally friendly spaces.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>4. Heritage and Restoration Projects</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Historical Building Restorations:</strong> We specialize in preserving and restoring historic buildings, combining modern materials and techniques to maintain the aesthetic and architectural integrity of the original structure while bringing it up to contemporary standards.</li>
                <li><strong>Architectural Renovations:</strong> Our team refurbishes classic buildings, blending historical elements with luxurious, modern upgrades, ensuring that the timeless beauty of the structure is preserved while providing enhanced functionality.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>5. High-Tech Construction</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Smart Homes:</strong> Ducktail designs homes equipped with the latest in automation technology, including AI-controlled lighting, security systems, climate control, and entertainment systems, offering the ultimate in convenience and modern living.</li>
                <li><strong>Technology-Integrated Offices:</strong> We create workspaces that embrace the future with advanced technology, such as interactive whiteboards, automated lighting systems, and IT infrastructure to optimize productivity and business operations.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>6. Premium Commercial and Industrial Buildings</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Data Centres:</strong> Our data centers are state-of-the-art facilities designed to meet the demands of modern data storage and processing, incorporating high-end security systems, climate control, and reliable power backup to ensure optimal performance.</li>
                <li><strong>Premium Warehousing:</strong> We offer high-end commercial and industrial spaces, including advanced systems for inventory management, automation, and energy-efficient features to streamline operations and ensure sustainability in warehousing.</li>
              </ul>
            </div>
          </div>

          {/* Show More/Less Button Logic */}
          {!showMore && (
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowMore(true)} 
                className="text-orange-500 font-semibold"
              >
                Show More
              </button>
            </div>
          )}

          {/* Additional Content for Show More */}
          {showMore && (
            <>
              {/* Show Less Button */}
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowMore(false)} 
                  className="text-orange-500 font-semibold"
                >
                  Show Less
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumConstruction;