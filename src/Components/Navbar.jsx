// components/Navbar.jsx
import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import LogoLight from "../Assets/LogoLight.png";
import LogoDark from "../Assets/LogoDark.png";
import CartLight from "../Assets/CartLight.png";
import CartDark from "../Assets/CartDark.png";
import UserDark from "../Assets/UserDark.png";
import UserLight from "../Assets/UserLight.png";
import { MoonOutlined, SunOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700 dark:bg-gray-800">
      <div className="text-lg font-bold text-black dark:text-white">
        <img
          src={darkMode ? LogoLight : LogoDark}
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Antd Search bar */}
        <Search
          placeholder="搜尋商品..."
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="dark:bg-gray-700 dark:text-white"
        />

        {/* Language select */}
        <Select
          defaultValue="zh-TW"
          style={{ width: 80 }}
          options={[
            { value: "zh-TW", label: "中文" },
            { value: "en", label: "EN" },
          ]}
        />

        {/* Dark mode toggle */}
        <Button onClick={toggleDarkMode} size="middle" shape="circle">
          {darkMode ? <SunOutlined /> : <MoonOutlined />}
        </Button>

        <div>
          <UserOutlined
            style={darkMode ? { color: "white" } : { color: "black" }}
          />
        </div>

        <img style={{ width: 50 }} src={darkMode ? CartLight : CartDark} />
      </div>
    </nav>
  );
};

export default Navbar;
