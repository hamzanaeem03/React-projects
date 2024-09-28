import React from "react";

function CartCard({ item, addToCart, isAddedToCart }) {
  const { title, images, price, description } = item;

  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
        <img
          className=" w-full object-cover object-center"
          src={`${images[0]}`}
          alt="product img"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category.name}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <p className="text-gray-700 mb-3 items-center lg:ml-auto md:ml-0  text-sm py-1 border-gray-200">
            ${price}
          </p>
          <a
            onClick={addToCart}
            className="text-indigo-500 inline-flex items-center md:mb-2 cursor-pointer lg:mb-0"
          >
            {isAddedToCart ? "Remove from Cart " : " Add to cart"}

            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
