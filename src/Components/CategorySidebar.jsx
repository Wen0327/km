import React from "react";
import { useI18n } from "../Utils/intlHelper";

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
  const { intlHelper } = useI18n();
  return (
    <div>
      <h3 className="flex text-lg font-semibold mb-4 items-center justify-center">
        {intlHelper("all.products")}
      </h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex cursor-pointer hover:underline text-blue-600 dark:text-blue-300 items-center justify-center"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
