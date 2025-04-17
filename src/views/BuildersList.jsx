import React, { useEffect } from "react";
import useFindBuilderStore from "../store/useFindBuilderStore.js";
import { useNavigate } from "react-router-dom";



const BuildersList = () => {
  const {
    states,
    districts,
    taluks,
    selectedState,
    setSelectedState,
    setSelectedDistrict,
    setSelectedTaluk,
    fetchLocationData,
    builders,
    isLoading,
    selectedDistrict,
    selectedTaluk,
    fetchBuilders,
  } = useFindBuilderStore();

  useEffect(() => {
    fetchLocationData();
    fetchBuilders();
  }, [fetchLocationData, fetchBuilders]);

  const navigate = useNavigate();


  return (
    <div className="flex flex-col min-h-screen">
      {/* Builders Listing Section */}
      <div className="w-full bg-white py-8 px-4 md:px-8">
        {/* Note */}
        <div className="text-center mb-6 text-gray-700 font-bold">
          Join us with Ducktail once you choose your Builder to get support access from Ducktail.
        </div>

        {/* Filter and Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* State Dropdown */}
          <div className="flex flex-col max-w-[200px]">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              State
            </label>
            <div className="relative bg-gradient-to-br from-white to-gray-100 p-1 rounded-lg shadow-sm h-9">
              <select
                className="w-full h-full bg-transparent border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 cursor-pointer appearance-none text-xs px-2"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="" className="py-2">Select State</option>
                {states.map((state) => (
                  <option
                    key={state}
                    value={state}
                    className="bg-white text-gray-900 py-2 px-2"
                  >
                    {state}
                  </option>
                ))}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* District Dropdown */}
          <div className="flex flex-col max-w-[200px]">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              District
            </label>
            <div
              className={`relative bg-gradient-to-br ${
                selectedState
                  ? "from-white to-gray-100"
                  : "from-gray-200 to-gray-300"
              } p-1 rounded-lg shadow-sm h-9`}
            >
              <select
                className="w-full h-full bg-transparent border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 cursor-pointer appearance-none text-xs px-2"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={!selectedState}
              >
                <option value="" className="py-2">Select District</option>
                {districts.map((district) => (
                  <option
                    key={district}
                    value={district}
                    className="bg-white text-gray-900 py-2 px-2"
                  >
                    {district}
                  </option>
                ))}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Taluk Dropdown */}
          <div className="flex flex-col max-w-[200px]">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Taluk
            </label>
            <div
              className={`relative bg-gradient-to-br ${
                selectedDistrict
                  ? "from-white to-gray-100"
                  : "from-gray-200 to-gray-300"
              } p-1 rounded-lg shadow-sm h-9`}
            >
              <select
                className="w-full h-full bg-transparent border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 cursor-pointer appearance-none text-xs px-2"
                value={selectedTaluk}
                onChange={(e) => setSelectedTaluk(e.target.value)}
                disabled={!selectedDistrict}
              >
                <option value="" className="py-2">Select Taluk</option>
                {taluks.map((taluk) => (
                  <option
                    key={taluk}
                    value={taluk}
                    className="bg-white text-gray-900 py-2 px-2"
                  >
                    {taluk}
                  </option>
                ))}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Builder Cards Grid - 3x3 format with horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading builders...</p>
          ) : builders && builders.length > 0 ? (
            builders.map((builder, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow border border-gray-100 p-4 relative"
              >
                <div className="flex flex-col md:flex-row h-full gap-4">
                  <div className="w-full md:w-2/5">
                    <div className="rounded-lg overflow-hidden h-full">
                      <img
                        src={
                          builder.profile_image ||
                          "/assets/2964.jpg"
                        }
                        alt="Builder property"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 flex flex-col">
                    <h3 className="font-bold text-xl text-black">
                      {builder.company_name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {builder.engineer_name}
                    </p>
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
                        {builder.verified ? "Verified" : "Not Verified"}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span>ID: {builder.ducktail_id}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>{builder.address_line1},</span>
                      <span>{builder.district}, </span>
                      <span>{builder.state || "No state"}</span>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex-1 text-center text-sm"
                       onClick={() => navigate(`/buildersinfo/${builder.builder_id}`)}>
                        VIEW MORE
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded flex-1 text-center text-sm">
                        GET DIRECTION
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No builders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildersList;
