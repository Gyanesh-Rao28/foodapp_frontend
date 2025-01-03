// src/components/dashboard/AddMenuItem.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuItem } from "../../features/menu/menuSlice";

const AddMenuItem = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    category: "Appetizers",
    price: "",
    availability: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        addMenuItem({
          ...formData,
          price: Number(formData.price),
        })
      ).unwrap();
      setFormData({
        name: "",
        category: "Appetizers",
        price: "",
        availability: true,
      });
    } catch (error) {
      console.error("Failed to add menu item:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-accent p-6 rounded-lg shadow">
      <h2 className="text-xl font-heading font-semibold mb-4 text-background">
        Add New Menu Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-body text-sm font-medium mb-1 text-background block">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 font-body border border-secondary rounded focus:ring-1 focus:ring-primary
                     focus:border-primary transition-colors"
            required
          />
        </div>

        <div>
          <label className="font-body text-sm font-medium mb-1 text-background block">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full p-2 font-body border border-secondary rounded focus:ring-1 focus:ring-primary
                     focus:border-primary transition-colors"
          >
            <option>Appetizers</option>
            <option>Main Course</option>
            <option>Desserts</option>
            <option>Beverages</option>
          </select>
        </div>

        <div>
          <label className="font-body text-sm font-medium mb-1 text-background block">
            Price (₹)
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full p-2 font-body border border-secondary rounded focus:ring-1 focus:ring-primary
                     focus:border-primary transition-colors"
            min="0"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={formData.availability}
            onChange={(e) =>
              setFormData({ ...formData, availability: e.target.checked })
            }
            className="h-4 w-4 text-primary focus:ring-primary border-secondary rounded"
          />
          <label className="ml-2 font-body text-sm text-background">
            Available
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-accent font-body py-2 px-4 rounded-md 
                   hover:bg-primary-hover transition-colors"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItem;
