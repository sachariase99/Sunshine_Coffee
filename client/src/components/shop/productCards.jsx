// ProductCards.jsx
import React, { useEffect, useState } from 'react';

const ProductCards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/products/getAll')
      .then(response => response.json())
      .then(products => setProducts(products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item); // Add this line to log the item
    addToCart(item);
  };

  return (
    <div>
      <div className='grid grid-cols-3'>
        {products.map(item => (
          <div className='flex flex-col m-auto' key={item.id}>
            <h2 className='text-[96px] font-licorice mb-4'>{item.name}</h2>
            <img className='object-cover h-[349px] w-[349px] rounded-lg' src={item.image} alt={item.name} />
            <p className='max-w-[349px] h-[700px] mt-8 text-[24px]'>{item.description}</p>

            <div className='font-inika flex flex-col justify-start'>
              <p className='text-[24px]'>Price: {item.price} DKK</p>
              <button onClick={() => handleAddToCart(item)} className="px-16 bg-black text-white text-[24px] py-4 rounded-lg mb-12 mt-8">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
