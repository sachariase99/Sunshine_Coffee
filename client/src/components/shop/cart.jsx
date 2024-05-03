import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, isCartOpen, toggleCart, decreaseItem, increaseItem }) => {
  console.log('Adding item to cart:', cartItems);
  console.log('Cart items:', cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate tax
  const tax = totalPrice * 0.25;

  return (
    <div>
      {isCartOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>}
      <div className={`fixed top-0 right-0 bottom-0 w-[50%] bg-[#EFEFEF] z-20 font-inika ${isCartOpen ? '' : 'hidden_animation'}`} style={{ animation: `${isCartOpen ? 'slideInRight' : 'slideOutRight'} 0.5s forwards` }}>
        <div className="text-black flex flex-col items-center mt-32">
          <div onClick={toggleCart} className="absolute top-2 left-2 cursor-pointer">
            <IoMdClose className="text-[73px]" />
          </div>
          <h2 className="text-[96px] mb-4 font-licorice">Shopping Cart</h2>
          {(cartItems ?? []).length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="mb-8 flex justify-between w-1/2 border-b-[1px] border-black pb-4 relative">
                <p>{item.name}</p>
                <div className='flex items-center absolute left-1/2 -translate-x-1/2'>
                  <button onClick={() => decreaseItem(item)} className='cursor-pointer h-4 w-4 flex items-center'>
                    <span className='block w-4 bg-black h-[2px]'></span>
                  </button>
                  <span className='block border border-black h-[25px] w-[25px] mx-2 text-center'>{item.quantity}</span>
                  <button onClick={() => increaseItem(item)} className='cursor-pointer h-4 w-4 relative'>
                    <span className='block w-4 bg-black h-[2px] absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2'></span>
                    <span className='block h-4 bg-black w-[2px] absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2'></span>
                  </button>
                </div>
                <p>{item.price * item.quantity} DKK</p>
              </div>
            ))
          ) : (
            <p className='mb-8'>No items in the cart</p>
          )}
          {(cartItems ?? []).length > 0 && (
            <>
              <div className='flex justify-between w-1/2 mb-8'>
                <p>Tax (25%)</p>
                <p>{tax.toFixed(2)} DKK</p>
              </div>
              <div className='flex justify-between w-1/2'>
                <p>Total</p>
                <p>{totalPrice} DKK</p>
              </div>
              <div className='flex items-center justify-between w-1/2 mt-32'>
                <p className='mt-4'>Items in cart: {totalQuantity}</p>
                <Link to="/checkout" onClick={toggleCart} className="px-8 bg-black text-white py-4 rounded-lg mb-12 mt-6">Go to Checkout</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
