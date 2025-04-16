import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useI18n } from "../Utils/intlHelper";

const CartPage = (props) => {
  const { intlHelper } = useI18n();
  const { isAuthenticated,logout } = useAuth();
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
        
        <button onClick={logout}>cart</button>
      </div>
    </>
  );
};

export default CartPage;
