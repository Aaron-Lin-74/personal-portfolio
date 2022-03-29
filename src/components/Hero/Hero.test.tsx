import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

describe('Hero component', () => {
  test('should render the component', () => {
    render(<Hero />);
    screen.getByText(/hi, i am aaron/i);
    screen.getByRole('img', {
      name: /my profile/i,
    });
    screen.getByRole('heading', {
      name: /i am a highly motivated frontend developer who is passionate about web development\./i,
    });
    screen.getByText(
      /my experiences include front\-end web development \(react, redux, javascript es6\/typescript, html5, and css3\/sass\), back\-end web development \(node\/express, rest api\), and aws cloud infrastructure\./i
    );
    screen.getByRole('button', {
      name: /hire me/i,
    });
    screen.getByRole('button', {
      name: /view resume/i,
    });
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#contact');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      'Aaron(Yaotian)_Lin_Resume.pdf'
    );
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'download',
      'Aaron(Yaotian)_Lin_Resume.pdf'
    );
  });
});
