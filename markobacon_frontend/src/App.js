import MainPage from './MainPage.js';
import MarksideHome from './MarksideComponents/MarksideHome.js';
import ShibaHomepage from './Emergenshiba/ShibaHomepage.js';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
      <Router>
        <Switch>
  
          <Route exact path="/" component={MainPage} />

          <Route exact path="/markside" component={MarksideHome} />

          <Route exact path="/emergenshiba" component={ShibaHomepage} />
  
          <Route default component={MainPage} />
  
        </Switch>
      </Router>
    );
}

export default App;