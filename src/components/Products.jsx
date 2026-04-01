import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, handleAddToCart, myCarts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {products.map((item) => (
        <ProductCard 
          key={item.id} 
          item={item} 
          handleAddToCart={handleAddToCart} 
          myCarts={myCarts}
        />
      ))}
    </div>
  );
};

export default Products;