import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

export const Routes = (
    <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
        <Route component={NotFound}></Route>
    </Switch>
);