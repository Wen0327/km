import React from "react";

const categories = [
  "特惠商品(數量有限 售完為止)",
  "新品專區",
  "防災專區",
  "振宇零件專區",
  "端件送90度轉接起子頭",
  "建築五金",
  "電料用品",
  "手工具類",
];

const CategorySidebar = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">分類</h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="cursor-pointer hover:underline text-blue-600 dark:text-blue-300"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
