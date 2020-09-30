import React from 'react';
import './css/App.css';
import AllItems from './components/AllItems';
import NewItem from './components/NewItem';


function App() {

  return (
      <div>
          <AllItems />
          <NewItem />
      </div>
  );
}

export default App;
