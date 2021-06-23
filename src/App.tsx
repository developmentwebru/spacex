import React from 'react';
import './App.css';
import Launches from './components/Launches/Launches';
import { Dropdowns } from './components/Dropdown/Dropdown';

class App extends React.Component {

  render() {

    return (
      <div className="container">
        <Dropdowns />
        <Launches />
      </div>
    )
  }
}

export default App;
