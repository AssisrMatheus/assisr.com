import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import messages from "../src/locales";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";
import { AppState } from "./redux/reducers";

addLocaleData([...en, ...pt]);

interface IAppProps {
  theme: AppState["theme"]["theme"];
  language: AppState["theme"]["language"];
}

const currentTheme = (theme: IAppProps["theme"]) => ({
  isNes: theme === "nes"
});

const App = (props: IAppProps) => {
  let language = props.language;
  let translations = messages[language];

  if (!translations) {
    console.warn(
      `Missing locale data for locale: "${language}". Using default locale: "en" as fallback.`
    );
    language = "en";
    translations = messages.en;
  }

  return (
    <div className="App">
      <ThemeProvider key={props.theme} theme={() => currentTheme(props.theme)}>
        <IntlProvider key={language} locale={language} messages={translations}>
          <React.Fragment>
            <Home />
            <Normalize />
            <GlobalStyle />
          </React.Fragment>
        </IntlProvider>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  language: state.theme.language,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(App);
