import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 px-2 lg:px-12 py-3 w-full sticky top-0 z-50 shadow-sm">
      <div className="navbar-start w-auto lg:w-[50%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
            <li><a className="text-[#7e22ce] font-bold">Login</a></li>
          </ul>
        </div>
        <a className="text-xl lg:text-3xl font-extrabold text-[#7e22ce] cursor-pointer tracking-tight ml-1 lg:ml-0">DigiTools</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600 font-medium space-x-2">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      
      <div className="navbar-end flex items-center gap-3 lg:gap-6 w-full lg:w-[50%] justify-end">
        <div className="indicator cursor-pointer">
          <span className="indicator-item badge badge-secondary badge-sm">{cartCount}</span>
          <img src="\src\assets\products\shopping-cart.png" alt="Cart" className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
        <a className="hidden lg:block cursor-pointer text-gray-700 font-medium hover:text-[#7e22ce]">Login</a>
        <a className="btn bg-[#7e22ce] hover:bg-[#6b21a8] text-white rounded-full px-4 lg:px-6 min-h-0 h-9 lg:h-12 border-none normal-case text-sm lg:text-base">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;