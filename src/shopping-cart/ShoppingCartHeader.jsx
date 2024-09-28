import React, { useState } from "react";

const ShoppingCartHeader = ({ cartItems , showCartItems }) => {
  console.log("cartItems  =>", cartItems)
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">
            Home
          </a>
          <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">
            Blogs
          </a>
          <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">
            Contact Us
          </a>
          {/* <a className="hover:text-gray-900"></a> */}
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-2xl">Shopping Cart</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a className="mr-5 hover:text-gray-900 flex items-center gap-1 text-xl cursor-pointer"
        //   onClick={()=>showCartItems(true)}
          >
            Cart ( {cartItems.length} )
        {/* {  showCartItems ? "Show Cart Items" : `Cart ${cartItems.length} ) </p>`} */}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default ShoppingCartHeader;
