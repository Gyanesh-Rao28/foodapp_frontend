// src/pages/Orders.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrders } from "../features/orders/orderSlice";
import OrderItem from "../components/orders/OrderItem";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 font-body mb-4">{error}</p>
        <Link
          to="/menu"
          className="text-primary hover:text-primary-hover transition-colors"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-heading font-bold mb-4 text-background">
          No Orders Yet
        </h2>
        <p className="text-background/80 font-body mb-4">
          You haven't placed any orders yet.
        </p>
        <Link
          to="/menu"
          className="bg-primary text-accent font-body px-6 py-2 rounded-md hover:bg-primary-hover transition-colors"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-heading font-bold mb-6 text-background">
        Your Orders
      </h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
