import React from 'react'

const Footerlanding = () => {
  return (
    <div className='pt-10'>
       <footer className=" text-black py-8 " style={{backgroundColor:"#b0acac"}}>
  <div className="container max-w-6xl mx-auto px-4">
    {/* <!-- Top Section --> */}
    <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
      {/* <!-- Logo and About Section --> */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <img
          src="/assets/black logo.png"
          alt="Ducktail Logo"
          className="mx-auto md:mx-0 w-64 mb-4"
        />
        <p className=" text-gray-800">
          Ducktail – The Construction Platform, is your trusted partner in
          construction, connecting companies with skilled professionals.
        </p>
      </div>

      {/* <!-- Useful Links --> */}
      <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
  <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
  <div className="flex flex-wrap">
    {/* <!-- First Half --> */}
    <ul className="text-sm space-y-2 w-1/2">
      <li><a href=" " className="hover:underline">➲ Home</a></li>
      <li><a href=" " className="hover:underline">➲ About us</a></li>
      <li><a href=" " className="hover:underline">➲ Service</a></li>
      <li><a href=" " className="hover:underline">➲ Join us</a></li>
    </ul>
    {/* <!-- Second Half --> */}
    <ul className="text-sm space-y-2 w-1/2">
      <li><a href=" " className="hover:underline">➲ Career</a></li>
      <li><a href=" " className="hover:underline">➲ Support</a></li>
      <li><a href=" " className="hover:underline">➲ Blog</a></li>
    </ul>
  </div>
</div>


      {/* <!-- Contact Information --> */}
      <div class="w-full md:w-1/3 text-center md:text-left">
        <h3 class="text-lg font-bold mb-4">CONTACT US</h3>
        <p class="text-sm flex items-center mb-2">
          <span class="mr-2">📍</span> Tamil Nadu
        </p>
        <p class="text-sm flex items-center mb-2">
          <span class="mr-2">📞</span> +91 99427 28804
        </p>
        <p class="text-sm flex items-center mb-2">
          <span class="mr-2">📧</span> manothsingh1997@gmail.com
        </p>
      </div>
    </div>

    {/* <!-- Bottom Section --> */}
    
  </div>
 

</footer>
<div class="border-t border-gray-400 mt-0 pt-4 p-3 bg-black">
  <div class="container max-w-6xl mx-auto px-4  flex flex-wrap justify-between items-center">
    <p class="text-sm text-center md:text-left w-full md:w-auto text-white">
      Copyright © 2024 Ducktail, All rights reserved.
    </p>
    <div class="flex space-x-6 justify-center md:justify-end md:mt-0">
      <a href=" " class="text-white hover:text-gray-400">Facebook</a>
      <a href=" " class="text-white hover:text-gray-400">Instagram</a>
      <a href=" " class="text-white hover:text-gray-400">Pinterest</a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footerlanding;
