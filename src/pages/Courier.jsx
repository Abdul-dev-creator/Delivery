// import React, { useState } from 'react'
// import { FaHome } from "react-icons/fa";
// import { Link } from 'react-router-dom';


// const Courier = () => {
//   const [isRating, setIsRating] = useState(false)
//   const handleRating = () => {
//     setIsRating((prev) =>  !prev)
//   }

//   const [isFeedback, setIsFeedback] = useState(0)
//   const handleFeedback = (items) => {
//     setIsFeedback(items)
//     console.log(items);
//   }
//   return (
//     <div>
//       <div className='flex flex-col gap-5 items-center bg-white w-[50%] p-5 mx-7 my-9 font-inter '>
//         <div className=' items-center '>
//           <h1 className='text-[25px] font-semibold text-center'>Session feedback</h1>
//           <p className='text-[13px] text-gray-400 text-center'>please rate your experience with the rider below</p>
          
//       <div className='flex' >
        
//     {
//     [1,2,3,4,5].map((items, id) => (
//       <p className='' key={id} onClick={()=>handleFeedback(items) }>
//         <svg onClick={handleRating} width="30px" height="30px" viewBox="0 0 24 24" fill={isFeedback >= items ? "#fbbf24" : "none"}  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="gray" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//       </p>
//     ))
//     }
//       </div>
//       <div>
//         <p className='text-center'>Additional feeback</p>
//         <input type="text"  placeholder='my feeback!!' className='p-5 border-2 border-gray-300 ' />
//       </div>
//       <button className='border-solid border-2 p-2 px-9 items-center py-3 mt-3 flex  '>Submit Feeback</button>
//       <p className='text-center'>or</p>
//       <Link to= '/'>
//       <button className='border-solid border-2 p-2 flex items-center gap-2'><FaHome/> Home</button>
//       </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Courier

import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Courier = () => {
  const [rating, setRating] = useState(4); // Default to 4 stars
  const [feedback, setFeedback] = useState("");

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, feedback });
    // You can handle the feedback submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Session feedback</h2>
        <p className="mb-2">Please rate your experience with the rider below</p>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= rating ? "yellow" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer text-yellow-500"
              onClick={() => handleRating(star)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.973 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.89a1 1 0 00-1.176 0l-3.973 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.973-2.89c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
              />
            </svg>
          ))}
        <p className="mb-2">{rating}/5 stars</p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded-lg mb-4"
            rows="3"
            placeholder="My feedback!!"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit feedback
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to='/'>
          
          <button className="text-gray-500 hover:underline gap-4"><FaHome/> Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courier;
