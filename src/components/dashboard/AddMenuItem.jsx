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
      // Reset form
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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>Appetizers</option>
            <option>Main Course</option>
            <option>Desserts</option>
            <option>Beverages</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price (₹)</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
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
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">Available</label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItem;
