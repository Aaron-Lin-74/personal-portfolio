import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section id='contact' className='contact-container'>
      <div className='contact-text-container'>
        <h3>Contact Me</h3>
      </div>
      <div className='contact-form-container'>
        <form
          action='https://formsubmit.co/4699fbde88305d25523009d4086457b3'
          method='POST'
        >
          <input
            type='text'
            name='name'
            placeholder='NAME'
            aria-label='name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='EMAIL'
            aria-label='email'
            required
          />
          <textarea
            name='message'
            aria-label='message'
            placeholder='MESSAGE'
          ></textarea>
          <input
            type='hidden'
            name='_next'
            value={`${window.location.origin}/`}
          />
          <input type='hidden' name='_captcha' value='false' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
