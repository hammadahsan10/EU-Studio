import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SigninForm.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// });

const SigninForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Make an API request to the Django backend
        const response = await axios.post('http://127.0.0.1:8000/estudio/login/', values);

        // Handle success, e.g., redirect to dashboard
        console.log('Login successful', response.data);
      } catch (error) {
        // Handle errors, e.g., display an error message to the user
        console.error('Login failed', error);
        setError('Login failed. Please check your credentials.');
      }
    },
  });

  return (
    <div className='signin-body'>
      <div className='wrapper1'>

        <form onSubmit={formik.handleSubmit}>
          <h1>Sign In</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Email'
              id='email'
              name='email'
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <FaUser className='icon' />
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

          <div className='remember-forgot'>
            <label>
              <input
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              Remember me
            </label>
            <a href='/'>Forgot password?</a>
          </div>
          <div className="signin-button">

            <button type='submit'>Sign in</button>
          </div>

          <div className='register-link'>
            <p>
              Don't have an account? <Link to='/home/signup'>Sign Up</Link>
            </p>
          </div>
          {error && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SigninForm;