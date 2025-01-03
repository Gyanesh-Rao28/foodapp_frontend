// src/components/menu/MenuItem.jsx
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
    toast.success(`Added ${item.name} to cart`, {
      duration: 1200,
      position: "top-right",
      style: {
        background: "#3F72AF",
        color: "#F9F7F7",
        marginTop: "48px",
      },
      icon: "🛒",
    });
  };

  return (
    <div className="bg-accent rounded-lg shadow-md p-4">
      <h3 className="text-lg font-heading font-semibold mb-2 text-background">
        {item.name}
      </h3>
      <p className="font-body text-background/80 mb-2">
        Category: {item.category}
      </p>
      <p className="font-body text-primary font-bold mb-4">₹{item.price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-primary text-accent font-body py-2 px-4 rounded-md hover:bg-primary-hover 
                 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!item.availability}
      >
        {item.availability ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default MenuItem;
