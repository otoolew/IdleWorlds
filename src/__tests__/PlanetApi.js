import React from 'react';
import renderer from 'react-test-renderer';
import PlanetApi from '../dataApi/PlanetApi';
test('Fetches Planet data', () => {
    const component = renderer.create(
      <PlanetApi/>
    );


  });