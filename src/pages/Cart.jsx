import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import { createOrder } from "../features/orders/orderSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    toast.success("Item removed from cart");
  };

  const handleCheckout = async () => {
    try {
      const orderItems = items.map((item) => ({
        menuItemId: item._id,
        quantity: item.quantity,
      }));

      await dispatch(createOrder({ items: orderItems })).unwrap();
      dispatch(clearCart());
      toast.success("Order placed successfully!");
      navigate("/orders");
    } catch (error) {
      toast.error(error.message || "Failed to place order");
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <button
          onClick={() => navigate("/menu")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Go to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-indigo-600">₹{item.price} per item</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Quantity Controls */}
              <div className="flex items-center border rounded">
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity - 1)
                  }
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity + 1)
                  }
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Total for this item */}
              <div className="w-24 text-right">
                ₹{item.price * item.quantity}
              </div>

              {/* Remove button */}
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-600 hover:text-red-800 px-2"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="text-xl font-bold mb-4 text-right">
          Total: ₹{totalAmount}
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
