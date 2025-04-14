// pages/HomePage.jsx
import React from "react";
import CategorySidebar from "../Components/CategorySidebar";
import ProductCard from "../Components/ProductCard";

const HomePage = (props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
        <aside className="w-full lg:w-1/5 border-r p-4">
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
    </>
  );
};

export default HomePage;
