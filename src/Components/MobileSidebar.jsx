import React from "react";
import CategorySidebar from "../Components/CategorySidebar";
import { Drawer } from "antd";

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

const MobileSidebar = ({ open, onClose }) => {
  return (
    <Drawer
      closeIcon={false}
      title="mobileSideBar"
      placement="left"
      onClose={onClose}
      open={open}
      className="lg:hidden"
      bodyStyle={{ padding: 0 }}
      width={280}
    >
      <CategorySidebar categories={categories} title="all.products" />
    </Drawer>
  );
};

export default MobileSidebar;
