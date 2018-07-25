import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Testimonials } from "./components/Testimonials";
import { Social } from "./components/Social";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <About />
        <Work />
        <Testimonials />
        <Social />
        <Contact />
        <Footer />
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
