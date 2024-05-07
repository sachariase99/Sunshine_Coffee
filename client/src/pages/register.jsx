import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LineSpacer from '../components/lineSpacer';
import Testimonies from '../components/testimonies';
import Login from './login';

const Register = () => {
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const location = useLocation();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        // Validate each form field
        Object.keys(registerData).forEach(fieldName => {
            const value = registerData[fieldName].trim();
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                // Check if password and confirmPassword match
                if (registerData.password !== registerData.confirmPassword) {
                    setErrors({ confirmPassword: 'Passwords do not match' });
                    return;
                }
    
                // API call to register user
                const response = await fetch('http://localhost:8081/sign-up', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: registerData.email,
                        password: registerData.password
                    })
                });
    
                if (response.ok) {
                    // Registration successful
                    console.log('Registration successful');
                    // Redirect to login page (by updating the location)
                    window.location.href = '/login';
                } else {
                    // Registration failed
                    console.error('Registration failed:', response.statusText);
                }
            } catch (error) {
                console.error('An error occurred:', error.message);
            }
        }
    };

    // Check if the current location is the login page, and render the login component if it is
    if (location.pathname === '/login') {
        return <Login />;
    }

    return (
        <div className='font-inika'>
            <div className='mb-64 max-w-[400px] m-auto'>
                <h1 className='text-[128px] font-licorice text-center mt-64 mb-16'>Register</h1>
                <form onSubmit={handleSubmit} className='mx-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className={`text-[16px] ${errors.email ? 'text-red-500' : ''}`}>
                            {errors.email ? errors.email : 'Email'}
                        </label>
                        <input type="email" id="email" name="email" value={registerData.email} onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className={`text-[16px] mt-2 ${errors.password ? 'text-red-500' : ''}`}>
                            {errors.password ? errors.password : 'Password'}
                        </label>
                        <input type="password" id="password" name="password" value={registerData.password} onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="confirmPassword" className={`text-[16px] mt-2 ${errors.confirmPassword ? 'text-red-500' : ''}`}>
                            {errors.confirmPassword ? errors.confirmPassword : 'Confirm Password'}
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={registerData.confirmPassword} onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                    </div>
                    <div className='flex justify-center gap-2'>
                        <button type="submit" className='bg-black text-white text-[16px] py-4 px-16 rounded-lg mt-8'>Register</button>
                    </div>
                </form>
            </div>
            <LineSpacer />
            <Testimonies />
        </div>
    );
};

export default Register;
