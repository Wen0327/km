import React from "react";

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
