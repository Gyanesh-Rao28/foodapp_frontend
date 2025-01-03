import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-accent rounded-lg shadow-md p-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-4">
          <span className="font-body text-background">
            Order #{order._id.slice(-6)}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-body ${
              order.status === "Completed"
                ? "bg-primary text-accent"
                : "bg-secondary text-background"
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-heading font-bold text-primary">
            ₹{order.totalAmount}
          </span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-secondary">
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div>
                  <p className="font-heading">{item.menuItem.name}</p>
                  <p className="text-sm font-body text-background">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-primary font-body">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-secondary text-sm font-body text-background">
            <p>Order ID: {order._id}</p>
            <p>Ordered On: {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
