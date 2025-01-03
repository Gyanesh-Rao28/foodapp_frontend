// src/pages/Dashboard.jsx
import { useState } from "react";   
import AddMenuItem from "../components/dashboard/AddMenuItem";
import MenuItemsList from "../components/dashboard/MenuItemsList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-background">
          Dashboard
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-md font-body transition-colors ${
              activeTab === "list"
                ? "bg-primary text-accent"
                : "bg-secondary text-background hover:bg-secondary-hover"
            }`}
          >
            Menu Items
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`px-4 py-2 rounded-md font-body transition-colors ${
              activeTab === "add"
                ? "bg-primary text-accent"
                : "bg-secondary text-background hover:bg-secondary-hover"
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
