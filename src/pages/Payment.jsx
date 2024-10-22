// import React, { useState } from 'react';

// const Payment = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [nameOnCard, setNameOnCard] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     alert('Payment details submitted');
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-lg rounded-lg mt-10">
//       <h1 className="text-center text-2xl font-bold mb-6">
//         Fast, Flexible, And Secure Payments
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Card Number
//           </label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter card number"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//           />
//         </div>

//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="MM/YY"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//             />
//           </div>

//           <div className="w-1/2 pl-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               CVC / CVV
//             </label>
//             <input
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter CVC"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Name on card
//           </label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter name"
//             value={nameOnCard}
//             onChange={(e) => setNameOnCard(e.target.value)}
//           />
//         </div>

//         <div className="mb-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img src="visa-logo.png" alt="Visa" className="h-8 mr-2" />
//             <img src="mastercard-logo.png" alt="Mastercard" className="h-8 mr-2" />
//             <img src="paypal-logo.png" alt="PayPal" className="h-8" />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//         >
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

import React from 'react'
import Frame from '../assets/frame 115.png'
import Bank from '../assets/frame 116.png'
import Pay from '../assets/frame 118.png'


const Payment = () => {
  return (
    <div>
     <div className='border-solid  border-2 max-w-[40%] h-auto  items-center p-2 font-inter bg-[#ffffff] mx-10 md:mx-10 py-6 md:py-8 md:px-4 my-6 md:my-10'>
  {/* Title */}
  <h1 className='text-center font-bold text-lg md:text-xl'>
    Fast, Flexible, And Secure Payment
  </h1>

  {/* Credit/Debit Card Section */}
  <div className='flex pt-3 justify-between px-4 flex-col md:flex-row'>
    <h1 className='font-bold text-base md:text-lg'>
      Credit/Debit Card
    </h1>
    <div className='flex gap-3 justify-center md:justify-end mt-3 md:mt-0'>
      <img src={Frame} alt="" className='h-8' />
      <img src={Bank} alt="" className='h-8' />
      <img src={Pay} alt="" className='h-8' />
    </div>
  </div>

  {/* Information Paragraph */}
  <p className='text-[14px]  py-5 text-gray-400 text-center md:text-left'>
    You may be directed to your bank's 3D Secure Process to authenticate your information.
  </p>

  {/* Input Fields */}
  <div>
   <div className='border-solid border-2 px-5 py-2 h-[61px] rounded-[30px]'>
    <p className='text-gray-400'>Card number</p>
    <input
      type="text"
      className='outline-none '
    />
   </div>

    {/* Expiry Date and CVC/CVV Fields */}
    <div className='flex gap-3 flex-col md:flex-row mt-5'>
    <div className='border-solid border-2 px-5 py-2 h-[62px] rounded-[30px]'>
    <p className='text-gray-400'>Expiry Date</p>
    <input
      type="text"
      className='outline-none '
    />
   </div>
   <div className='border-solid border-2 px-5 py-2 h-[62px] rounded-[30px]'>
    <p className='text-gray-400'>CVC/CVV</p>
    <input
      type="text"
      className='outline-none '
    />
   </div>
    </div>

    {/* Name on Card */}
    <div className='border-solid border-2 px-5 py-2 h-[63px] rounded-[30px] mt-3'>
    <p className='text-gray-400'>Name on card</p>
    <input
      type="text"
      className='outline-none '
    />
   </div>
  </div>
</div>
    </div>
  )
}

export default Payment
