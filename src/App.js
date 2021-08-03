import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/Views/Homepage/Homepage";
import { createGlobalStyle } from "styled-components";
import Entrypage from "./components/Views/Entrypage/Entrypage";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'matrixFont', sans-serif;
        }
`;

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Entrypage} />
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
