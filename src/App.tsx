import React, { Component } from "react";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Home />
        <Normalize />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
