import React from "react";
import CategorySidebar from "../Components/CategorySidebar";
import { Drawer } from "antd";

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
      <CategorySidebar />
    </Drawer>
  );
};

export default MobileSidebar;
