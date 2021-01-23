import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import translate from "./i18n/translate";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          {translate("hello")}
          <img src={logo} className="App-logo" alt="logo" />
          <p>{translate("edit", { path: <code>src/App.js</code> })}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <hr />
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
          <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
