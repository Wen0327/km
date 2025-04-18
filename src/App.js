import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import zh from "./Locales/zh-TW.json";
import en from "./Locales/en.json";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import LogInPage from "./Pages/LogInPage";
import { AuthProvider } from "./Context/AuthContext";

const messages = {
  "zh-TW": zh,
  en: en,
};

function App() {
  const [locale, setLocale] = useState("zh-TW");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AuthProvider>
        <Router>
          <Navbar
            locale={locale}
            setLocale={setLocale}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/userInfo" element={<CartPage />} />
            <Route path="/logIn" element={<LogInPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </IntlProvider>
  );
}

export default App;
