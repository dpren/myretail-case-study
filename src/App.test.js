import React from 'react';
import ReactDOM from 'react-dom';
import { App, changeQuantity } from './App.js';


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('changeQuantity', () => {
  const state = { orderQuantity: 1 };

  test('it increments correctly', () => {
    expect(changeQuantity(0)(state)).toMatchObject({"orderQuantity": 1});
    expect(changeQuantity(1)(state)).toMatchObject({"orderQuantity": 2});
    expect(changeQuantity(-1)(state)).toMatchObject({"orderQuantity": 0});
  });

  test('it doesnt go below zero', () => {
    expect(changeQuantity(-5)(state)).toMatchObject({"orderQuantity": 0});
  });
});
