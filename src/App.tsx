import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

// Redux
import { connect } from "react-redux";
import { AppState } from "./redux/reducers";

// Styles
import GlobalStyle from "./GlobalStyle";

// Components
import Home from "./pages/Home/Home";

interface IAppProps {
  theme: AppState["theme"]["theme"];
}

const currentTheme = (theme: IAppProps["theme"]) => ({
  isNes: theme === "nes"
});

const App = (props: IAppProps) => (
  <div className="App">
    <ThemeProvider theme={() => currentTheme(props.theme)}>
      <React.Fragment>
        <Home />
        <Normalize />
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(App);
