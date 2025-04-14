import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import { IntlProvider } from "react-intl";
import zh from "./Locales/zh-TW.json";
import en from "./Locales/en.json";

const messages = {
  "zh-TW": zh,
  en: en,
};

function App() {
  const [locale, setLocale] = useState("zh-TW");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <HomePage setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
