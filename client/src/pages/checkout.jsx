import React from 'react'
import LineSpacer from '../components/lineSpacer'
import Testimonies from '../components/testimonies'

const Checkout = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='font-inika'>
            <h1 className='text-[128px] font-licorice text-center mt-64 mb-16'>Checkout</h1>
            <div className='grid grid-cols-2 mb-16 text-xl'>
                <div className='flex flex-col items-center'>
                    Hej
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-1/2'>
                        {/* Map over cartItems and render each item */}
                        {cartItems.map((item, index) => (
                            <div key={index} className='flex justify-between items-center border-b-[1px] border-black pb-6 mb-6'>
                                <p>{item.name}</p>
                                <p>x{item.quantity}</p>
                                <p>{item.price * item.quantity} DKK</p>
                            </div>
                        ))}
                        <div className='flex justify-between'>
                            <p>Total</p>
                            <p>{totalPrice} DKK</p>
                        </div>
                    </div>
                </div>
            </div>
            <LineSpacer />
            <Testimonies />
        </div>
    )
}

export default Checkout
