import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Technologies from './Technologies';

describe('Technologies component', () => {
  test('should render the component', () => {
    render(<Technologies />);
    screen.getByRole('heading', { name: 'Technologies' });
    screen.getByRole('heading', {
      name: "I've worked with a range a technologies in the web development world. From Front-End To Back-End.",
    });
    screen.getByRole('heading', { name: 'Front-End' });
    screen.getByRole('heading', { name: 'Back-End' });
    screen.getByRole('heading', { name: 'Other' });
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
