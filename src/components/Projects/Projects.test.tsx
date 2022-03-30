import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';

describe('Projects component', () => {
  test('should render the component', () => {
    render(<Projects />);
    screen.getByRole('heading', {
      name: /projects/i,
    });
  });
});
