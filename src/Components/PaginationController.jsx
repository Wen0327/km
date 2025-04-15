import React from "react";
import { Pagination } from "antd";

const PaginationController = ({ currentPage, pageSize, total, onChange }) => {
  return (
    <div className="flex justify-center mt-6">
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default PaginationController;
