import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/Views/Homepage/Homepage";
import { createGlobalStyle } from "styled-components";
import Entrypage from "./components/Views/Entrypage/Entrypage";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  body {
    font-family: 'Raleway', sans-serif;
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
