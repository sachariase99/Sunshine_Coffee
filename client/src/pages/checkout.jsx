import React, { useState } from 'react';
import LineSpacer from '../components/lineSpacer';
import Testimonies from '../components/testimonies';

const Checkout = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const [selectedShipping, setSelectedShipping] = useState('FakeEx'); // Default selected shipping option
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phone: '',
        province: '',
        country: ''
    });
    const [errors, setErrors] = useState({});

    const handleRadioChange = (event) => {
        setSelectedShipping(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Name:', name, 'Value:', value);
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validateForm = () => {
        const errors = {};
        // Validate each form field
        Object.keys(formData).forEach(fieldName => {
            const value = formData[fieldName].trim();
            if (value === '') {
                // Capitalize the first letter of the field name
                const formattedFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1').trim();
                errors[fieldName] = `${formattedFieldName} is required`;
            }
        });
        // Set errors state
        setErrors(errors);
        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Proceed with the checkout process
            console.log('Form submitted successfully:', formData);
            // Refresh the page
            window.location.reload();
        }
    };

    return (
        <div className='font-inika'>
            <h1 className='text-[128px] font-licorice text-center mt-64 mb-16'>Checkout</h1>
            <div className='grid grid-cols-2 mb-16 text-xl'>
                <div className='flex flex-col items-center'>
                    <div className='w-1/2 flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="firstName" className={`text-[16px] ${errors.firstName ? 'text-red-500' : ''}`}>
                                {errors.firstName ? errors.firstName : 'First name'}
                            </label>
                            <input type="text" id="firstName" name="firstName" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="lastName" className={`text-[16px] mt-2 ${errors.lastName ? 'text-red-500' : ''}`}>
                                {errors.lastName ? errors.lastName : 'Last name'}
                            </label>
                            <input type="text" id="lastName" name="lastName" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="address" className={`text-[16px] mt-2 ${errors.address ? 'text-red-500' : ''}`}>
                                {errors.address ? errors.address : 'Address'}
                            </label>
                            <input type="text" id="address" name="address" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="city" className={`text-[16px] mt-2 ${errors.city ? 'text-red-500' : ''}`}>
                                {errors.city ? errors.city : 'City'}
                            </label>
                            <input type="text" id="city" name="city" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="phone" className={`text-[16px] mt-2 ${errors.phone ? 'text-red-500' : ''}`}>
                                {errors.phone ? errors.phone : 'Phone'}
                            </label>
                            <input type="tel" id="phone" name="phone" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="province" className={`text-[16px] mt-2 ${errors.province ? 'text-red-500' : ''}`}>
                                {errors.province ? errors.province : 'Province'}
                            </label>
                            <input type="text" id="province" name="province" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="country" className={`text-[16px] mt-2 ${errors.country ? 'text-red-500' : ''}`}>
                                {errors.country ? errors.country : 'Country'}
                            </label>
                            <input type="text" id="country" name="country" onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-1/2 h-[665px] flex flex-col justify-between'>
                        <div>
                            {/* Map over cartItems and render each item */}
                            {cartItems.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border-b-[1px] border-black pb-6 mb-6 relative'>
                                    <p>{item.name}</p>
                                    <p className='absolute left-1/2 -translate-x-1/2'>x{item.quantity}</p>
                                    <p>{item.price * item.quantity} DKK</p>
                                </div>
                            ))}
                            <div className='flex justify-between'>
                                <p>Total</p>
                                <p>{totalPrice} DKK</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className='border-[1px] border-black h-[187.5px] w-full text-[16px] rounded-lg'>
                                <p className='mt-6 text-center'>Choose shipping</p>
                                <div className='m-auto w-[75%]'>
                                    <div className='flex justify-between mb-4 mt-10'>
                                        <p>FakeEx</p>
                                        <input type="radio" checked={selectedShipping === 'FakeEx'} value="FakeEx" onChange={handleRadioChange} />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>FakeEx Express</p>
                                        <input type="radio" checked={selectedShipping === 'FakeEx Express'} value="FakeEx Express" onChange={handleRadioChange} />
                                    </div>
                                </div>
                            </div>
                            <button className='bg-black text-white text-[16px] py-4 px-16 rounded-lg mt-8' onClick={handleSubmit}>Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
            <LineSpacer />
            <Testimonies />
        </div>
    );
};

export default Checkout;
