import React from 'react'
import Ellipse from '../assets/Ellipse 4.png'


const Setting = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Payment details submitted');
  };
  return (
    <div>
      <div className='flex flex-col  justify-center gap-5 mt-8 border-solid border-2 h-[500px] mx-[18%] w-[750px] bg-white  shadow-md font-inter'>

      <div className='flex flex-col items-center mt-2 '>
        <img src={Ellipse} alt="" />
      </div>
      <div className='ml-16 font-bold text-[20px]'>
        <h1>Account Settings</h1>
      </div>

      <div className='flex flex-row items-center justify-center gap-32 '>

     
      <div className='flex flex-col gap-3 '>
        <div className='font-semibold'>
          <p>Full Name</p>
          <input type="text" placeholder='Enter your full name' className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>
        <div>
          <p className='font-semibold'>Username</p>
          <input type="text" placeholder='@username.com' className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>
        <div>
          <p className='font-semibold'>Email</p>
       <input type="email" placeholder='Enter your Email' className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>
        <div className='flex gap-8'>
          <button  onClick={handleSubmit} className='border-solid border-2 px-8 py-1 rounded-[20px] bg-[#0056b3] border-[#0056b3] text-white'>save</button>
          <button className='border-solid border-2 px-8 py-1 rounded-[20px] border-[#0056b3]'>cancel</button>
        </div>
      </div>


      <div className='pb-10 flex flex-col gap-3 font-semibold '>
        <div>
          <p>Last name</p>
          <input type="text" placeholder='Enter your Lastname' className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>

        <div>
          <p>Password</p>
          <input type="password" placeholder='********'className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>

        <div>
          <p>Phone Number</p>
          <input type="text" placeholder='Enter your Phone Number'className='border-2 border-solid border-gray-300 px-2 py-1 rounded-md' />
        </div>
      
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Setting