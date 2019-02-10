import React from 'react';
import ReactDOM from 'react-dom';
import Robot from './Robot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Robot rotation={0} posX={0} posY={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
