// pages/HomePage.jsx
import React, { useState } from "react";
import CategorySidebar from "../Components/CategorySidebar";
import ProductCard from "../Components/ProductCard";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const HomePage = (props) => {
  const { setSidebarVisible, sidebarVisible } = props;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
      {/* Drawer for mobile */}
      <Drawer
        title="分類"
        placement="left"
        onClose={() => setSidebarVisible(false)}
        open={sidebarVisible}
        className="lg:hidden"
        bodyStyle={{ padding: 0 }}
        width={280}
      >
        <CategorySidebar />
      </Drawer>

      {/* Static sidebar on large screens */}
      <aside className="hidden lg:block lg:w-1/5 border-r p-4">
        <CategorySidebar />
      </aside>

      <main className="flex-1 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <ProductCard key={idx} idx={idx} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
