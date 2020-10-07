import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

it('renders correctly', () => {
  const { getByText } = render(<App />);

  expect(getByText('Template Repo for issues!')).toBeTruthy();
});
