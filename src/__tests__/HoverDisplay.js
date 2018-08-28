import React from 'react';
import renderer from 'react-test-renderer';
import HoverDisplay from '../components/mouse/HoverDisplay';

test('Mouse changes the class when hovered', () => {
  const component = renderer.create(
    <HoverDisplay page="http://www.facebook.com">Facebook</HoverDisplay>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});