import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUserAlt, FaEnvelope, FaLock, FaUnlockAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Modal from 'react-modal'; // Import react-modal
import './SignupForm.css';
import { handlePostRequest } from '../../../services/PostTemplate';
import { useDispatch } from 'react-redux';


const SignupForm = () => {
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object({
          
            name: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),

        onSubmit: async (values) => {
            console.log("values", values);
            const response = await handlePostRequest(values, '/api/SignUp', true);
            console.log("response", response);
            if (response) {
                // Handle success
            } else {
                // Handle failure
            }
        },
    });

    return (
        <div className='signup-body'>
            <div className='wrapper2'>

                <form onSubmit={formik.handleSubmit}>
                    <h1>Sign Up</h1>

                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            id='name'
                            name='name'
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        <FaEnvelope className='icon' />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div>
                    ) : null} 

                    <div className='input-box'>
                        <input
                            type='email'
                            placeholder='Enter your Email'
                            id='email'
                            name='email'
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <FaEnvelope className='icon' />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}

                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Password'
                            id='password'
                            name='password'
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <FaLock className='icon' />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}

                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            id='confirmPassword'
                            name='confirmPassword'
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        <FaUnlockAlt className='icon' />
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className='error'>{formik.errors.confirmPassword}</div>
                    ) : null}
                    <div className="signup-button">
                        <button type='submit'>Sign Up</button>
                    </div>

                    <div className='register-link'>
                        <p>
                            Already have an account? <Link to='/signin'>Sign In</Link>
                        </p>
                    </div>
                    {error && <div className='error'>{error}</div>}

                    {/* Modal for successful registration */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        contentLabel="User Registration Successful"
                    >
                        <h2>User Registered Successfully!</h2>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </Modal>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
