import React from "react";

const orders = [
  { id: "#1001", date: "2024-10-12", status: "Delivered", time: "10:30 AM" },
  { id: "#1002", date: "2024-10-13", status: "Ongoing", time: "In Progress" },
  { id: "#1003", date: "2024-10-14", status: "Cancel", time: "N/A" },
  { id: "#1004", date: "2024-10-15", status: "Pending", time: "12:00 PM" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-blue-500 text-white";
    case "Ongoing":
      return "bg-gray-400 text-white";
    case "Cancel":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    default:
      return "";
  }
};

const App = () => {
  return (
    <div className="p-8 bg-gray-100 h-screen">

      <div className="flex  justify-between px-4 pb-6 font-inter">
        <h1 className="text-[23px] font-bold">Deliveries History</h1>
        <input type="datetime-local" className="py-1 px-3 bg-gray-200 rounded-md border-solid border-2 border-gray-600 w-50" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal font-inter">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Delivery Date</th>
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
                <td className="py-3 px-6 text-left">{order.date}</td>
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
  );
};

export default App;
