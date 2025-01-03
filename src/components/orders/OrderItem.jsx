// src/components/orders/OrderItem.jsx
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Order #{order._id.slice(-6)}</span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              order.status === "Completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold text-indigo-600">
            ₹{order.totalAmount}
          </span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t">
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.menuItem.name}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-indigo-600">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t text-sm text-gray-600">
            <p>Order ID: {order._id}</p>
            <p>Ordered On: {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
