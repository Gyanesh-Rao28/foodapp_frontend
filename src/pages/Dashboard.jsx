// src/pages/Dashboard.jsx
import { useState } from "react";   
import AddMenuItem from "../components/dashboard/AddMenuItem";
import MenuItemsList from "../components/dashboard/MenuItemsList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list"); // 'list' or 'add'

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "list"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Menu Items
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "add"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Add New Item
          </button>
        </div>
      </div>

      {activeTab === "list" ? <MenuItemsList /> : <AddMenuItem />}
    </div>
  );
};

export default Dashboard;
