import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import Segun from '../assets/rectangle 230 (1).png'


const orders = [
  {
    id: "#1001",
    location: "Taiwo Road ilorin",
    dropoff: "Amala place fate road",
    status: "Delivered",
    time: "10:30 AM",
  },
  {
    id: "#1004",
    location: "oloje phase II ilorin",
    dropoff: "Asadam road",
    status: "Pending",
    time: "12:00 PM",
  },
  {
    id: "#1002",
    location: "Ilofa Road GRA ",
    dropoff: "Sango area ilorin",
    status: "Ongoing",
    time: "In Progress",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-blue-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    case "Ongoing":
      return "bg-gray-400 text-white";
  }
};

const Active = () => {
  return (
    <div>
      <div className="flex gap-5 mx-6">
        <div className="max-w-md  p-4 bg-white shadow-lg rounded-lg">
          {/* Receipt number input */}
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Enter your receipt number"
              className="w-full p-2 border rounded-md"
            />
            <button className="bg-blue-500 text-white ml-2 p-2 rounded-md">
              Track
            </button>
          </div>

          {/* Delivery ID and Summary */}
          <div className="border p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div className="text-gray-500">#1004</div>
            </div>
            <div className="mt-3 text-sm">
              <p>
                Your package arrived on:{" "}
                <span className="font-semibold">15 Oct</span>
              </p>
              <p>
                You will receive it on:{" "}
                <span className="font-semibold">6:00 pm</span>
              </p>
              <p>
                Total items: <span className="font-semibold">3</span>
              </p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="border p-3 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Delivery Information</h3>
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-xs">
                Ongoing
              </span>
            </div>

            {/* From and To locations */}
            <div className="text-sm mb-4">
              <p>
                From <span className="font-semibold">Ilofa road GRA</span>
              </p>
              <p>
                To <span className="font-semibold">Sango area Ilorin</span>
              </p>
            </div>

            {/* Tracking steps */}
            <div className="space-y-3">
              <div className="flex items-center">
                <AiOutlineArrowUp className="text-blue-500" />
                <span className="ml-2">
                  Order delivered to destination address
                </span>
                <span className="ml-auto text-sm text-gray-400">4:43</span>
              </div>
              <div className="flex items-center">
                <AiOutlineArrowUp className="text-blue-500" />
                <span className="ml-2">The order is on its way to Sango</span>
                <span className="ml-auto text-sm text-gray-400">5:12</span>
              </div>
              <div className="flex items-center">
                <AiOutlineArrowDown className="text-blue-500" />
                <span className="ml-2">Order handed over to courier</span>
                <span className="ml-auto text-sm text-gray-400">5:20</span>
              </div>
              <div className="flex items-center">
                <FaBox className="text-blue-500" />
                <span className="ml-2">Items being packed</span>
                <span className="ml-auto text-sm text-gray-400">5:31</span>
              </div>
            </div>
          </div>

          {/* Courier information */}
          <div className="mt-4 flex items-center border p-3 rounded-lg">
            <img
              src={Segun}
              alt="Courier"
              className="rounded-full w-10 h-10"
            />
            <div className="ml-3">
              <p className="font-semibold">Segun Ogunsanya</p>
              <p className="text-sm text-gray-500">Courier</p>
            </div>
            <div className="ml-auto flex space-x-3 text-blue-500">
              <button>
                <i className="fas fa-comment"></i>
              </button>
              <button>
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {/* <img src={Frame} alt="" className="w-[90%] h-[100%]" /> */}
          <iframe width="1000" height="592" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1011&amp;height=592&amp;hl=en&amp;q=No%204%20gaa-akanbi%20road%20ilorin%20ilorin,%20kwara%20state+(TrackEase)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.versicherungen.at/pflegevorsorge/'>private Pflegevorsorge</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=6a2018ab7277d007c3f9cdec301a44189b71307a'></script>
        </div>
      </div>
      <div className="p-8 bg-gray-100 h-screen">
        <div className="flex  justify-between px-4 pb-6 font-inter">
          <h1 className="text-[23px] font-bold">Ongoing Deliveries</h1>
          <input
            type="datetime-local"
            className="py-1 px-3 bg-gray-200 rounded-md border-solid border-2 border-gray-600 w-50"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal font-inter">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Pick Location</th>
                <th className="py-3 px-6 text-left">Drop off Location</th>
                <th className="py-3 px-6 text-left">Delivery Status</th>
                <th className="py-3 px-6 text-left">Expected Delivery Time</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{order.id}</td>
                  <td className="py-3 px-6 text-left">{order.location}</td>
                  <td className="py-3 px-6 text-left">{order.dropoff}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`py-1 px-3 rounded-full text-xs font-medium ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="py-3 px-6 text-left">{order.time}</td>
                  <td className="py-3 px-6 text-left">
                    <p>----</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Active;

