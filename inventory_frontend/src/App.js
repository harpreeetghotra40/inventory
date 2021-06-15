import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './config/protected.route.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={() => '404 not found'} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
