import { Select } from "antd";
import React from "react";
import { useI18n } from "../Utils/intlHelper";

const { Option } = Select;

const SortProductSelector = ({ onChangeSort }) => {
  const { intlHelper } = useI18n();
  return (
    <div className="flex justify-end mb-4">
      <Select
        defaultValue="default"
        style={{ width: 160 }}
        onChange={(value) => onChangeSort(value)}
      >
        <Option value="default">{intlHelper("Default.sorting")}</Option>
        <Option value="price-asc">{intlHelper("Price.low.to.high")}</Option>
        <Option value="price-desc">{intlHelper("Price.high.to.low")}</Option>
        <Option value="newest">{intlHelper("Newest.arrivals")}</Option>
      </Select>
    </div>
  );
};

export default SortProductSelector;
