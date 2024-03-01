import HomePage from './HomePage';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to /rates', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/rates');
  });
});
