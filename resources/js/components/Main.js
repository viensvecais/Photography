import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);
