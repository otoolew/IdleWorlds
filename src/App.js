import React, { Component } from 'react';
import './App.css';
import PlanetApi from './dataApi/PlanetApi';
import PlanetList from './components/planet/PlanetList';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <PlanetList planets={PlanetApi.planets}></PlanetList>
      </div>   
    );
  }
}

export default App;
