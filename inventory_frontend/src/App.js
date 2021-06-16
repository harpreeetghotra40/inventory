import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './config/protected.route.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => '404 not found'} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
