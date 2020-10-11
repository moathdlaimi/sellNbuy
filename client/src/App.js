import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import AllItems from './components/AllItems';
import NewItem from './components/NewItem';



function App() {

  return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={AllItems} />
            <Route path="/newPosting" component={NewItem} />
          </Switch>
        </Router>
        
      </div>
  );
}

export default App;
