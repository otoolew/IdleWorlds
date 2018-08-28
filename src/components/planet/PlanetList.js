import React from 'react';
import {planets} from '../../dataApi/PlanetApi';
import Planet from './Planet';

class PlanetList extends React.Component {
  renderPlanet(i) {   
    return <Planet value={i} />;
  }

  render() {
    return (
      <div>
        {this.renderPlanet(0)}
        {this.renderPlanet(1)}
        {this.renderPlanet(2)}
      </div>
    );
  }
}
export default PlanetList;
