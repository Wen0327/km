import React from "react";
import { useI18n } from "../Utils/intlHelper";

const CategorySidebar = ({categories,title}) => {
  const { intlHelper } = useI18n();
  return (
    <div>
      <h3 className="flex text-lg font-semibold mb-4 items-center justify-center">
        {intlHelper(title)}
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
