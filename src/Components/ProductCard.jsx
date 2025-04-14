import React from "react";

const ProductCard = (props) => {
const {idx} = props
  return (
    <div className="border rounded-lg p-2 shadow-sm hover:shadow-md transition dark:border-gray-700">
      <img
        src={`https://robohash.org/${idx}`}
        alt="product"
        className="w-full h-32 object-contain mb-2"
      />
      <h2 className="text-sm font-medium">保險絲 20mm</h2>
      <p className="text-red-500">NT$15</p>
    </div>
  );
};

export default ProductCard;
