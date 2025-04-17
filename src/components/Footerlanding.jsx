import React from 'react'

const Footerlanding = () => {
  return (
    <div className='pt-10'>
      <footer className="bg-black text-white py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
            {/* Logo and About Section - Left aligned */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
              <img
                src="/assets/Transparent background.png"
                alt="Ducktail Logo"
                className="mx-0 w-64 mb-4"
              />
              <p className="text-white text-left">
                Ducktail - The Construction Platform 
                Is your trusted construction partner connecting you with nearby verified and qualified   
                builders in your region. 
              </p>
            </div>

            {/* Useful Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
              <div className="flex flex-wrap">
                {/* First Half */}
                <ul className="text-sm space-y-2 w-1/2">
                  <li><a href=" " className="hover:underline">➲ Home</a></li>
                  <li><a href=" " className="hover:underline">➲ About us</a></li>
                  <li><a href=" " className="hover:underline">➲ Service</a></li>
                  <li><a href=" " className="hover:underline">➲ Join us</a></li>
                </ul>
                {/* Second Half */}
                <ul className="text-sm space-y-2 w-1/2">
                  <li><a href=" " className="hover:underline">➲ Career</a></li>
                  <li><a href=" " className="hover:underline">➲ Support</a></li>
                  <li><a href=" " className="hover:underline">➲ Blog</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
              <p className="text-sm flex items-center mb-2">
                <span className="mr-2">📍</span> Tamil Nadu
              </p>
              <p className="text-sm flex items-center mb-2">
                <span className="mr-2">📧</span> connect@ducktail.in
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-black p-3">
        <div className="container max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <p className="text-sm text-center md:text-left w-full md:w-auto text-white">
            Copyright © 2024 Ducktail, All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end mt-2 md:mt-0 w-full md:w-auto">
            <a href="/termscondition" className="text-white">Terms and Condition</a>
            <a href="/privacypolicy" className="text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footerlanding;