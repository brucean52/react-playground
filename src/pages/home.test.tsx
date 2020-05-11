import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Home test', () => {
  const { getByTestId } = render(<Home/>);

  expect(getByTestId('test')).toBeInTheDocument();
});
