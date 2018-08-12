import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Header } from "../components/Header";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { NotFound } from "../components/404";

export const Main = () => (
  <Route
    render={({ location }) => (
      <main>
        <TransitionGroup>
          {/* no different than other usage of
      CSSTransition, just make sure to pass
      `location` to `Switch` so it can match
      the old location as it animates out
  */}
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
              <Route exact path="/" component={Header} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={Contact} />
              {/* Without this `Route`, we would get errors during
          the initial transition from `/` to `/hsl/10/90/50`
      */}
              <Route render={() => <NotFound />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    )}
  />
);
