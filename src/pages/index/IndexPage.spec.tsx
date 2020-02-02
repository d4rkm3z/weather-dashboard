import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from './IndexPage';

test('<App /> renders without crash', () => {
  const { getByText } = render(<IndexPage />);

  expect(getByText('Sidebar')).toBeTruthy();
  expect(getByText('SearchBar')).toBeTruthy();
});
