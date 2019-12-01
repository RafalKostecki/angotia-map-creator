import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Import views
import { Template } from './Template';
import Home from './components/views/Home';



const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:lang?" component={Template}>
          <Route exact path="/" component={Home} />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

