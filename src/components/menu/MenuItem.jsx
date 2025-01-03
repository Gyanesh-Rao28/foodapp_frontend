import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Please login to add items to cart");
      return;
    }

    dispatch(addToCart({ item, quantity: 1 }));
    // Custom toast for item added
    toast.success(`Added ${item.name} to cart`, {
      duration: 1200, // 0.8 seconds
      position: "top-right",
      style: {
        background: "#4F46E5", // Indigo color
        color: "white",
        marginTop: "48px"
      },
      icon: "🛒",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-2">Category: {item.category}</p>
      <p className="text-indigo-600 font-bold mb-4">₹{item.price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        disabled={!item.availability}
      >
        {item.availability ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default MenuItem;
