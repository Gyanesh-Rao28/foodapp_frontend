import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMenuItems,
  filterByCategory,
} from "../../features/menu/menuSlice";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading, error, activeCategory } = useSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const categories = [
    "all",
    "Appetizers",
    "Main Course",
    "Desserts",
    "Beverages",
  ];

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(filterByCategory(category))}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
