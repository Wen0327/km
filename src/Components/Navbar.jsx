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
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img
            src={darkMode ? LogoLight : LogoDark}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">

        <Search
          placeholder={intl.formatMessage({ id: "navbar.search" })}
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="dark:bg-gray-700 dark:text-white"
        />


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


        <Button onClick={toggleDarkMode} size="middle" shape="circle">
          {darkMode ? (
            <SunOutlined style={{ fontSize: "20px" }} />
          ) : (
            <MoonOutlined style={{ fontSize: "20px" }} />
          )}
        </Button>

        <Link to="/logIn">
          <UserOutlined
            style={
              darkMode
                ? { color: "white", fontSize: "20px" }
                : { color: "black", fontSize: "20px" }
            }
          />
        </Link>

        <Link to="/cart">
          <ShoppingCartOutlined
            style={
              darkMode
                ? { color: "white", fontSize: "20px" }
                : { color: "black", fontSize: "20px" }
            }
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
