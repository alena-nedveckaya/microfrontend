import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
