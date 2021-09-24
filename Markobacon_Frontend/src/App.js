import MainPage from './MainPage.js';
import MarksideHome from './markside/MarksideHome.js';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
      <Router>
        <Switch>
  
          <Route exact path="/" component={MainPage} />

          <Route exact path="/markside" component={MarksideHome} />
  
          <Route default component={MainPage} />
  
        </Switch>
      </Router>
    );
}

export default App;