import React, { useState, useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8081/products/getAll')
        .then(response => response.json())
        .then(products => setProducts(products))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='grid grid-cols-3'>
            {products.map(item => (
                <div className='flex flex-col items-center' key={item.id}>
                    <h2 className='text-2xl font-bold'>{item.name}</h2>
                    <p className='max-w-[100%]'>{item.description}</p>
                    <img src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    )
}

export default Shop
