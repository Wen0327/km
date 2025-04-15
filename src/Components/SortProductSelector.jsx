import { Select } from "antd";
import React from "react";

const { Option } = Select;

const SortProductSelector = ({ onChangeSort }) => {
  return (
    <div className="flex justify-end mb-4">
      <Select
        defaultValue="default"
        style={{ width: 160 }}
        onChange={(value)=>onChangeSort(value)}
      >
        <Option value="default">預設排序</Option>
        <Option value="price-asc">價格由低到高</Option>
        <Option value="price-desc">價格由高到低</Option>
        <Option value="newest">最新上架</Option>
      </Select>
    </div>
  );
};

export default SortProductSelector;
