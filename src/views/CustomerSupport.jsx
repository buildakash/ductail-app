import React, { useState, useEffect } from 'react';

const CustomerSupport = () => {
  const [userType, setUserType] = useState("");
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
  const [errors, setErrors] = useState({});

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

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {

        }
        break;
      case "email":
        if (!/^[a-z0-9]+@gmail\.com$/.test(value)) {
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
        }
        break;
      case "postcode":
        if (!/^\d{6}$/.test(value)) {
        }
        break;
      case "state":
      case "district":
      case "taluk":
        if (!value) {
          error = "This field is required";
        }
        break;
      case "query":
        if (!value.trim()) {
          error = "Query is required";
        }
        break;
      default:
        break;
    }
    return error;
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

    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBack = () => {
    setUserType("");
  };

  const getAvailableDistricts = () => {
    return formData.state ? districts[formData.state] || [] : [];
  };

  const getAvailableTaluks = () => {
    return formData.district ? taluks[formData.district] || [] : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Customer Support.png"
          alt="Interior Design"
          className="w-full h-full object-cover bg-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center px-6 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title Section */}
          <div className="text-white flex-1 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-yellow-400">Are you stuck? </span> Let Ducktail clear the way for you!
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
              Submit your query today, and our expert team will help you navigate through any challenge with ease and expertise
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl" style={{ width: "100%" }}>
            {!userType ? (
              <div className="w-full text-center bg-gray-100 p-4 rounded-2xl shadow-md mb-4">
                <h2 className="text-1xl font-bold mb-2">Are you a Builder or Customer?</h2>
                <div className="flex justify-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="userType"
                      value="builder"
                      className="accent-blue-500"
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <span>Builder</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="userType"
                      value="customer"
                      className="accent-blue-500"
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <span>Customer</span>
                  </label>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-1xl font-bold mb-4 text-center">
                  {userType === "builder" ? "Builder Form" : "Customer Form"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name *" 
                      className={`border rounded-xl p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                    {errors.name && <span className="text-red-500 text-xs absolute -bottom-5">{errors.name}</span>}
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email *" 
                      className={`border rounded-xl p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                    {errors.email && <span className="text-red-500 text-xs absolute -bottom-5">{errors.email}</span>}
                  </div>

                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number *" 
                      className={`border rounded-xl p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                    {errors.phone && <span className="text-red-500 text-xs absolute -bottom-5">{errors.phone}</span>}
                  </div>

                  <div className="relative">
                    <select 
                      name="state" 
                      className={`border rounded-xl p-2 w-full ${errors.state ? 'border-red-500' : ''}`}
                      value={formData.state} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="">State *</option>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <span className="text-red-500 text-xs absolute -bottom-5">{errors.state}</span>}
                  </div>

                  <div className="relative">
                    <select 
                      name="district" 
                      className={`border rounded-xl p-2 w-full ${errors.district ? 'border-red-500' : ''}`}
                      value={formData.district} 
                      onChange={handleChange} 
                      required 
                      disabled={!formData.state}
                    >
                      <option value="">District *</option>
                      {getAvailableDistricts().map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    {errors.district && <span className="text-red-500 text-xs absolute -bottom-5">{errors.district}</span>}
                  </div>

                  <div className="relative">
                    <select 
                      name="taluk" 
                      className={`border rounded-xl p-2 w-full ${errors.taluk ? 'border-red-500' : ''}`}
                      value={formData.taluk} 
                      onChange={handleChange} 
                      required 
                      disabled={!formData.district}
                    >
                      <option value="">Taluk *</option>
                      {getAvailableTaluks().map(taluk => (
                        <option key={taluk} value={taluk}>{taluk}</option>
                      ))}
                    </select>
                    {errors.taluk && <span className="text-red-500 text-xs absolute -bottom-5">{errors.taluk}</span>}
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      name="postcode" 
                      placeholder="Postcode *" 
                      className={`border rounded-xl p-2 w-full ${errors.postcode ? 'border-red-500' : ''}`}
                      value={formData.postcode} 
                      onChange={handleChange} 
                      required 
                    />
                    {errors.postcode && <span className="text-red-500 text-xs absolute -bottom-5">{errors.postcode}</span>}
                  </div>

                  <div className="relative col-span-1 sm:col-span-2">
                    <textarea 
                      name="query" 
                      placeholder="Your Query *" 
                      className={`border rounded-xl p-2 w-full ${errors.query ? 'border-red-500' : ''}`}
                      rows="4" 
                      value={formData.query} 
                      onChange={handleChange} 
                      required
                    ></textarea>
                    {errors.query && <span className="text-red-500 text-xs absolute -bottom-5">{errors.query}</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-4 col-span-1 sm:col-span-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-500 text-white py-2 px-4 rounded-xl w-full h-10"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-xl w-full h-10"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
