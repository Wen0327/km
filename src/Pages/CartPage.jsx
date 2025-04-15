// pages/HomePage.jsx
import React from "react";
import { useAuth } from "../Context/AuthContext";

const CartPage = (props) => {
  const { isAuthenticated,logout } = useAuth();
  console.log(isAuthenticated)
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen dark:bg-gray-900 dark:text-white">
        
        <button onClick={logout}>cart</button>
      </div>
    </>
  );
};

export default CartPage;
