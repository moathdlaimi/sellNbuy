import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import AllItems from './components/AllItems';
import NewItem from './components/NewItem';
import Item from './components/Item';



function App() {

  return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={AllItems} />
            <Route path="/newPosting" component={NewItem} />
            <Route path="/item/:id" component={Item}/>
          </Switch>
        </Router>
        
      </div>
  );
}

export default App;
