import React from 'react';
const ProductCard = ({ item, handleAddToCart, myCarts = [] }) => {
  const isAdded = myCarts.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col">
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
          <img src={item.icon} alt="" className="w-8 h-8" />
        </div>
        <span className="bg-orange-100 text-orange-600 py-1.5 px-4 rounded-full text-xs font-bold">
          {item.tag}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mt-6">{item.name}</h3>
      <p className="text-gray-500 mt-3 text-sm h-12 leading-relaxed">
        {item.description}
      </p>
      
      <div className="mt-6 mb-6">
        <span className="text-3xl font-extrabold text-gray-900">${item.price}</span>
        <span className="text-gray-400 font-medium">/{item.period}</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {item.features.map((f, i) => (
          <li key={i} className="flex items-center text-gray-600 text-sm">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => handleAddToCart(item)}
        disabled={isAdded}
        className={`w-full font-semibold py-3.5 rounded-2xl transition ${
          isAdded 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-[#7e22ce] hover:bg-[#6b21a8] text-white'
        }`}
      >
        {isAdded ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;