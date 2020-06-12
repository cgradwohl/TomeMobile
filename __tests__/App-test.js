/* eslint-disable */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

// wierd fix to resolve 'import a file after the Jest environment has been torn down' error.
jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});
