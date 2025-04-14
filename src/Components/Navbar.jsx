// components/Navbar.jsx
import React, { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { Input, Select, Button } from "antd";
import LogoLight from "../Assets/LogoLight.png";
import LogoDark from "../Assets/LogoDark.png";
import {
  GlobalOutlined,
  MoonOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const Navbar = (props) => {
  const { setLocale } = props;
  const [darkMode, setDarkMode] = useState(false);
  const intl = useIntl();

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
          placeholder={intl.formatMessage({ id: "navbar.search" })}
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="dark:bg-gray-700 dark:text-white"
        />

        {/* Language select */}
        <Select
          suffixIcon={<GlobalOutlined />}
          onChange={(val) => setLocale(val)}
          defaultValue="zh-TW"
          style={{ width: 80 }}
          options={[
            { value: "zh-TW", label: "中文" },
            { value: "en", label: "EN" },
          ]}
        />

        {/* Dark mode toggle */}
        <Button onClick={toggleDarkMode} size="middle" shape="circle">
          {darkMode ? (
            <SunOutlined style={{ fontSize: "20px" }} />
          ) : (
            <MoonOutlined style={{ fontSize: "20px" }} />
          )}
        </Button>

        <div>
          <UserOutlined
            style={
              darkMode
                ? { color: "white", fontSize: "20px" }
                : { color: "black", fontSize: "20px" }
            }
          />
        </div>

        <div>
          <ShoppingCartOutlined
            style={
              darkMode
                ? { color: "white", fontSize: "20px" }
                : { color: "black", fontSize: "20px" }
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
