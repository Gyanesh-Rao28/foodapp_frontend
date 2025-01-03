// src/components/dashboard/MenuItemsList.jsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMenuItems,
  updateMenuItem,
  deleteMenuItem,
} from "../../features/menu/menuSlice";

const MenuItemsList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.menu);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const handleEdit = (item) => {
    setEditingItem({ ...item });
  };

  const handleUpdate = async () => {
    try {
      await dispatch(
        updateMenuItem({
          id: editingItem._id,
          data: editingItem,
        })
      ).unwrap();
      setEditingItem(null);
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await dispatch(deleteMenuItem(id)).unwrap();
      } catch (error) {
        console.error("Failed to delete item:", error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingItem?._id === item._id ? (
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, name: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingItem?._id === item._id ? (
                  <select
                    value={editingItem.category}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        category: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option>Appetizers</option>
                    <option>Main Course</option>
                    <option>Desserts</option>
                    <option>Beverages</option>
                  </select>
                ) : (
                  item.category
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingItem?._id === item._id ? (
                  <input
                    type="number"
                    value={editingItem.price}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        price: Number(e.target.value),
                      })
                    }
                    className="border rounded px-2 py-1 w-24"
                  />
                ) : (
                  `₹${item.price}`
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingItem?._id === item._id ? (
                  <input
                    type="checkbox"
                    checked={editingItem.availability}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        availability: e.target.checked,
                      })
                    }
                  />
                ) : (
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.availability
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.availability ? "Available" : "Unavailable"}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {editingItem?._id === item._id ? (
                  <>
                    <button
                      onClick={handleUpdate}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingItem(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-primary hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuItemsList;
