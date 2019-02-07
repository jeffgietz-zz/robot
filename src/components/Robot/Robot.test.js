import React from 'react';
import ReactDOM from 'react-dom';
import Robot from './Robot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Robot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
