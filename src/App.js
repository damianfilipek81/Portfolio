import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/Views/Homepage/Homepage";
import { createGlobalStyle } from "styled-components";
import Entrypage from "./components/Views/Entrypage/Entrypage";
import AboutMe from "./components/Views/AboutMe/AboutMe";
import MySkills from "./components/Views/MySkills/MySkills";

const GlobalStyles = createGlobalStyle`
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
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/skills" component={MySkills} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
