import React, { useState } from "react";
import CategorySidebar from "../Components/CategorySidebar";
import ProductCard from "../Components/ProductCard";
import SortProductSelector from "../Components/SortProductSelector";
import PaginationController from "../Components/PaginationController";
import { useI18n } from "../Utils/intlHelper";

const TOTAL_PRODUCTS = 500;
const PAGE_SIZE = 48;
const categories = [
    "categories1",
    "categories2",
    "categories3",
    "categories4",
    "categories5",
    "categories6",
    "categories7",
    "categories8",
  ];

const HomePage = (props) => {
  const { intlHelper } = useI18n();
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = Array.from({ length: TOTAL_PRODUCTS }).map((_, idx) => ({
    id: idx + 1,
    name: `商品 ${idx + 1}`,
  }));

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = allProducts.slice(startIdx, startIdx + PAGE_SIZE);

  const onChangeSort = (val) => {
    console.log(val);
  };

  const smoothToTop = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
      <aside className="hidden lg:block lg:w-1/5 border-r p-4">
        <CategorySidebar categories={categories} title="all.products"/>
      </aside>

      <main className="flex-1 p-4">
        <SortProductSelector onChangeSort={(val) => onChangeSort(val)} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} idx={product.id} />
          ))}
        </div>
        <PaginationController
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
          total={TOTAL_PRODUCTS}
          onChange={(page) => {
            smoothToTop(page);
          }}
        />
      </main>
    </div>
  );
};

export default HomePage;
