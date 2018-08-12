import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Menu } from "./components/Menu";
import { Main } from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Menu />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
render(<App />, window.document.getElementById("app"));
