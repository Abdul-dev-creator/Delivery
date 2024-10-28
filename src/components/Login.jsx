import React from "react";
import Red from "../assets/Man.png";
import Devicon from "../assets/devicon_google.png";
import Facebook from "../assets/logos_facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-4">
      {/* Container */}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-4/5 lg:w-2/3">
        {/* Left Side: Image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <img
            src={Red} // Update this path to your login image
            alt="Delivery person"
            className="object-cover h-full"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Login</h2>
          <p className="text-gray-500 mb-6">Glad you’re back.!</p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-[30px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-[30px] text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Remember me</span>
            </div>
            <Link to="/dashboard">
              <button className="w-full bg-blue-800 text-white py-2 rounded-[30px] hover:bg-blue-600 transition duration-300">
                Login
              </button>
            </Link>
          </form>

          <div className="mt-4 text-center">
            <a href="forget" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center justify-between mt-6">
            <hr className="w-full border-gray-300" />
            <span className="mx-3 text-gray-500">Or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex mt-6 gap-5 justify-center mb-14">
            <img src={Devicon} alt="Google" className="w-8 h-8 " />

            <img src={Facebook} alt="Facebook" className="w-8 h-8 " />
          </div>

          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="signup" className="text-blue-500">
              Signup
            </a>
          </p>

          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
            <a href="#" className="hover:underline">
              Customer Care
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
