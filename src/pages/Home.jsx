import React from "react";

const Home = () => {
  return (
    <div>
      <div className="border-solid border-2 max-w-lg shadow-lg bg-white mx-auto p-5 mt-10 ">

    
      <div className="justify-center text-center font-inter mt-7">
  {/* Title */}
  <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold">
    Request a New Delivery
  </h1>

  {/* Subtitle */}
  <p className="text-[12px] sm:text-[13px] text-gray-400">
    A form to enter delivery details
  </p>
</div>

{/* Form Section */}
<div className="flex w-full  sm:w-[60%] md:w-[90%] flex-col items-center gap-5 mt-5 mx-auto">
  {/* Pickup Address */}
  <input 
    type="text"  
    placeholder="Pickup Address"
    className="w-full p-[8px] sm:p-[10px] border-2 border-gray-400 rounded-[30px]" 
  />
  
  {/* Drop Address */}
  <input 
    type="text" 
    placeholder="Drop Address" 
    className="w-full p-[8px] sm:p-[10px] border-2 border-gray-400 rounded-[30px]" 
  />
  
  {/* Package Description */}
  <div className="w-full">
    <input 
      type="text" 
      placeholder="Package Description" 
      className="w-full p-[8px] sm:p-[10px] border-2 border-gray-400 rounded-[30px]"
    />
    <p className="text-[12px] sm:text-[13px] text-orange-400">(Weight, Size, etc.)</p>
  </div>

  {/* Preferred Delivery Time */}
  <input 
    type="text" 
    placeholder="Preferred Delivery Time" 
    className=" w-full p-[8px] sm:p-[10px] border-2 border-gray-400 rounded-[30px]
    "
  />
</div>

{/* Button Section */}
<div className="items-center flex justify-center mt-5">
  <button  onClick={() => alert('Schedule successful')} className="py-2 px-5 sm:px-7 rounded-[25px] border-2 bg-[#0056b3] text-white text-[12px] sm:text-[14px]">
    Schedule Delivery
  </button>
</div>
</div>

    </div>
  );
};

export default Home;
