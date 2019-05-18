// Common
import React, { useEffect, useState } from "react";
import intl from "react-intl-universal";
import { Normalize } from "styled-normalize";

// Redux
import { connect } from "react-redux";
import { StateType } from "./redux/reducers";

// Styles
import GlobalStyle from "./GlobalStyle";

// Components
import Home from "./pages/Home/Home";

const loadLocales = async (
  currentLanguage: string,
  setLangInit: (langInit: boolean) => void
) => {
  const locales = require("./locales").default;

  let currentLocale = currentLanguage;

  console.log(`Loading language: ${currentLanguage}`);
  if (!Object.keys(locales).includes(currentLanguage)) {
    currentLocale = "en-US";
    console.warn(
      `Language ${currentLanguage} not available. Falling back to ${currentLocale}`
    );
  }

  await intl.init({ currentLocale, locales });
  setLangInit(true);
};

interface IAppProps {
  currentLanguage: StateType["theme"]["currentLanguage"];
}

const App = (props: IAppProps) => {
  const [langInit, setLangInit] = useState(false);

  useEffect(() => {
    loadLocales(props.currentLanguage, setLangInit);
  }, [props.currentLanguage]);

  if (!langInit) {
    return null;
  }

  return (
    <div className="App">
      <Home />
      <Normalize />
      <GlobalStyle />
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  currentLanguage: state.theme.currentLanguage
});

export default connect(mapStateToProps)(App);
