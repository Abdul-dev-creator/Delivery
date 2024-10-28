import React from 'react';
import Man from '../assets/frame 157.png';
import Devicon from '../assets/devicon_google.png'
import Facebook from '../assets/logos_facebook.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      {/* Container */}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-4/5 lg:w-2/3">
        {/* Left Side: Image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <img
            src={Man} // Update with actual image path
            alt="Delivery person"
            className="object-cover h-full"
          />
        </div>
        
        {/* Right Side: Signup Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Signup</h2>
          <p className="text-gray-500 mb-6">Just some details to get you in.!</p>
          
          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-[90%] px-4 py-2 border rounded-[20px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email / Phone"
                className="w-[90%] px-4 py-2 border rounded-[20px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-[90%] px-4 py-2 border rounded-[20px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-[90%] px-4 py-2 border rounded-[20px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <Link to='/login'>
            <button onClick={() => alert('signup successful')} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Signup
            </button>
            </Link>
            
          </form>
          
          <div className="flex items-center justify-between mt-6">
            <hr className="w-full border-gray-300" />
            <span className="mx-3 text-gray-500">Or</span>
            <hr className="w-full border-gray-300" />
          </div>
          
          {/* Social Login */}
          <div className="flex mt-6 justify-center">
            <button className="bg-white shadow-md hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg inline-flex items-center mr-4">
              <img src={Devicon} alt="Google" className="w-6 h-6 mr-2" />
              Sign up with Google
            </button>
            <button  className="bg-white shadow-md hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg inline-flex items-center">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 mr-2" />
              Sign up with Facebook
            </button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Already Registered? <a href="login" className="text-blue-500">Login</a>
          </p>
          
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
