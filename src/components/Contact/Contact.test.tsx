import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact component', () => {
  const setup = () => {
    const utils = render(<Contact />);
    const nameInput: HTMLInputElement = screen.getByRole('textbox', {
      name: /name/i,
    });
    const emailInput: HTMLInputElement = screen.getByRole('textbox', {
      name: /email/i,
    });
    const messageInput: HTMLTextAreaElement = screen.getByRole('textbox', {
      name: /message/i,
    });
    const sendButton = screen.getByRole('button', {
      name: /send/i,
    });

    return { nameInput, emailInput, messageInput, sendButton, ...utils };
  };
  test('should render the component', () => {
    render(<Contact />);
    screen.getByRole('heading', {
      name: /contact me/i,
    });
    screen.getByRole('textbox', {
      name: /name/i,
    });
    screen.getByRole('textbox', {
      name: /email/i,
    });
    screen.getByRole('textbox', {
      name: /message/i,
    });
    screen.getByRole('button', {
      name: /send/i,
    });
  });
  test('should allow a name to be inputed in NAME input field', () => {
    const { nameInput } = setup();
    userEvent.type(nameInput, 'mock name');
    expect(nameInput.value).toBe('mock name');
  });
  test('should allow an email to be inputed in EMAIL input field', () => {
    const { emailInput } = setup();
    userEvent.type(emailInput, 'mockemail');
    expect(emailInput.value).toBe('mockemail');
  });
  test('should allow a message to be inputed in textarea field', () => {
    const { messageInput } = setup();
    userEvent.type(messageInput, 'mock message');
    expect(messageInput.value).toBe('mock message');
  });
});
