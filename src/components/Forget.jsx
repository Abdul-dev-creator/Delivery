import React from 'react';

const Forgot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Forgot Password ?</h2>
        <p className="text-gray-500 mb-6">Please enter your email</p>
        
        {/* Form */}
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <button onClick={()=> alert('password reset')} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Reset Password
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-gray-500 mt-6">
          Don’t have an account? <a href="signup" className="text-blue-500">Signup</a>
        </p>
        
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Customer Care</a>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
