import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ myCarts, setMyCarts }) => {
  const handleRemove = (id) => {
    const remainingCart = myCarts.filter(item => item.id !== id);
    setMyCarts(remainingCart);
  };

  const handleCheckout = () => {
    setMyCarts([]);
    toast.success("Checkout successful! Cart is cleared.");
  };

  const totalPrice = myCarts.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-[#111827] mb-8 text-left">Your Shopping Cart</h2>
      
      {myCarts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-gray-200">
          <p className="text-gray-500 text-lg">Your cart is completely empty.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-200 p-6 lg:p-10">
          <div className="space-y-6">
            {myCarts.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 sm:mt-0 px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</h3>
            <button 
              onClick={handleCheckout}
              className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-semibold py-3 px-8 rounded-xl transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;