import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Main from './components/Main';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function App() {
  const [myCarts, setMyCarts] = useState([]);
  const [buttonActive, setButtonActive] = useState('products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = myCarts.find(item => item.id === product.id);
    if (!isExist) {
      setMyCarts([...myCarts, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warning('Already in the cart!');
    }
  };

  return (
    <div>
      <Navbar cartCount={myCarts.length} />
      <Banner />
      <Stats />

      <div className="py-16 px-4 w-full bg-gray-50/30">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          <div className="flex justify-center mb-12">
            <div className="border border-gray-200 rounded-full p-1 flex bg-white shadow-sm inline-flex">
              <button 
                onClick={() => setButtonActive('products')}
                className={`px-8 py-2 rounded-full font-semibold text-base lg:text-lg transition ${
                  buttonActive === 'products' ? 'bg-[#7e22ce] text-white shadow-md' : 'text-gray-700'
                }`}
              >
                Products
              </button>
              <button 
                onClick={() => setButtonActive('cart')}
                className={`px-8 py-2 rounded-full font-semibold text-base lg:text-lg transition ${
                  buttonActive === 'cart' ? 'bg-[#7e22ce] text-white shadow-md' : 'text-gray-700'
                }`}
              >
                Cart ({myCarts.length})
              </button>
            </div>
          </div>

          {buttonActive === 'products' ? (
            <Products 
              products={products} 
              handleAddToCart={handleAddToCart} 
              myCarts={myCarts} 
            />
          ) : (
            <Cart myCarts={myCarts} setMyCarts={setMyCarts} />
          )}

        </div>
      </div>

      <Footer />
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}

export default App;