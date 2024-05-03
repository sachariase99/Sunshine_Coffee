import React, { useState } from 'react';
import LineSpacer from '../components/lineSpacer';
import Testimonies from '../components/testimonies';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loggedInUser, setLoggedInUser] = useState(null);



    const handleInputChange = (event) => {
        const { name, value } = event.target;
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const endpoint = 'http://localhost:8081/sign-in';
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                console.log(response);
                if (response.ok) {
                    // Successful login
                    const userData = await response.json();
                    setLoggedInUser(userData);
                    // Reset form data
                    setFormData({
                        email: '',
                        password: ''
                    });
                } else {
                    // Error handling for unsuccessful login
                    console.error('Login failed:', response.statusText);
                }
            } catch (error) {
                console.error('An error occurred:', error.message);
            }
        }
    };


    return (
        <div className='font-inika'>
            <div className='mb-64 w-[400px] m-auto'>
                <h1 className='text-[128px] font-licorice text-center mt-64 mb-16'>Login</h1>
                {loggedInUser ? (
                    <div>
                        <p>Welcome, {loggedInUser.email}</p>
                        {/* You can add additional user details here */}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className={`text-[16px] ${errors.email ? 'text-red-500' : ''}`}>
                                {errors.email ? errors.email : 'Email'}
                            </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className={`text-[16px] mt-2 ${errors.password ? 'text-red-500' : ''}`}>
                                {errors.password ? errors.password : 'Password'}
                            </label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className='border border-black w-full h-[46px] px-3 rounded' />
                        </div>
                        <div className='flex justify-center gap-2'>
                            <button type="submit" className='bg-black text-white text-[16px] py-4 px-16 rounded-lg mt-8'>Login</button>
                        </div>
                    </form>
                )}
            </div>
            <LineSpacer />
            <Testimonies />
        </div>
    );
};

export default Login;
