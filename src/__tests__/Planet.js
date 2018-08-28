import React from 'react';
import renderer from 'react-test-renderer';

test('Fetches Planet data', () => {
    const component = renderer.create(
      <Planet />
    );
    let tree = component.toJSON();


  });