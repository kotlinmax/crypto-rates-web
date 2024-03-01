import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import {render, screen} from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders a 404 text', () => {
    render(<NotFoundPage />);
    const textElement = screen.getByText('404');
    expect(textElement).toBeInTheDocument();
  });
});
