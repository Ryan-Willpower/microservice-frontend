import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Index } from "./pages";
import { GlobalStyle } from "./commons/globalStyle";
import { Navbar } from "./commons/navbar";
import { Container } from "./commons/container";

export const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Navbar />

        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Container>

      <GlobalStyle />
    </Router>
  );
};
