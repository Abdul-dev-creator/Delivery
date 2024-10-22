import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import Tandem from '../assets/Tandem.png';
import Back from '../assets/image 4.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between  bg-[#0056b3]   py-5 md:py-[20px] px-4 md:px-14 text-white">
        <div className="flex gap-1 items-center">
          <FiPhoneCall />
          <p>+2349023567838</p>

        </div>
    
        <p>
          <span className="font-bold">OCTOBER SALE:</span> Get 10% Off Your
          First Delivery!
        </p>
        <div className="flex  flex-col md:flex-row gap-5 md:gap-[30px] ">
         <div className="flex gap-2 items-center">
            <IoChatboxEllipsesOutline />
            <p>Chat</p>

         </div>
            
        <div className="flex gap-2 items-center">
            <AiOutlineInfoCircle />
            <p>Faqs</p> 
        </div>
          
          
          <div className="flex gap-2 items-center">
             <HiOutlineSupport />
             <p>support</p>

          </div>
            
          
          
        </div>
      </div>

      <div className="flex felx-col justify-between md:px-20 md:py-20 px-5 py-10 items-center">
        <div className="flex gap-3 items-center">
            <img src={Tandem} alt="" className=" w-6"/>
            <h3 className="text-black font-bold">Tracker</h3>
        </div>
            <ul className="flex flex-col lg:flex-row  gap-5 md:gap-10 text-[#cdcdcd] cursor-pointer font-semibold mt-5 lg:mt-0">
                <li className="text-blue-500 font-bold">Home</li>
                <li className="hover:text-black">Track Delivery</li>
                <li className="hover:text-black">Order History</li>
                <li className="hover:text-black">Review</li>
                <li className="hover:text-black">Contact</li>
            </ul>
        

        <div className="flex gap-3 mt-5 md:mt-0 "> 
           <button className="border-solid border-2  py-2 px-8 rounded-[28px]  border-blue-600">Login</button>
           <button className="border-solid border-2 bg-[#0056b3] py-2 px-8 rounded-[28px] text-white">Sign Up</button>
        </div>
      </div>

    <div className="flex flex-col md:flex-row md:px-12 px-5 justify-between">
        <div>
        <h1 className="text-[50px] font-bold leading-tight ">Effortless Deliveries, <br /> Tracked in Real-Time</h1>
    <p className="text-gray-400 pt-5 font-inter">From scheduling to delivery, stay updated with real-time <br /> tracking and notifications</p>
    <div className="flex gap-4 mt-6">
     <Link to='/dashboard'>
     
        <button className="border-solid border-2  py-2 px-8 rounded-[28px]  bg-blue-700 border-blue-600 text-white">Schedule a Delivery</button>
     </Link>
      
        <button className="border-solid border-2  py-2 px-8 rounded-[28px]  border-blue-900">Join as a courier</button>
    </div>
    

    </div>

    <div>
        <img src={Back} alt=""  className="bg-[#e6eef7]"/>
    </div>

        </div>
    
    <div className="text-center pt-14"> 
<h1 className="text-[36px] md:text-[46px] font-semibold" >Why <span className="text-blue-600">Choose</span> Our Delivery Platform? </h1>
<p className="text-gray-400  md:text-[18px] text-[16px]">Explore Features that makes scheduling and tracking deliveries easier than ever.</p>
    </div>
   

    </div>
  );
}

export default Header;