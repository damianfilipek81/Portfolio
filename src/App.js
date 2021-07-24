import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/Views/Homepage/Homepage';
const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
