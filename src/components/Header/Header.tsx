import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className='logo-container'>
        <a className='logo-link' href={process.env.PUBLIC_URL}>
          <BsPersonCircle size='3rem' /> <span>Portfolio</span>
        </a>
      </div>
      <nav className='main-nav'>
        <ul>
          <li>
            <a className='nav-link' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a className='nav-link' href='#tech'>
              Technologies
            </a>
          </li>
          <li>
            <a className='nav-link' href='#contact'>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div className='social-container'>
        <a
          className='social-icons'
          href='https://www.linkedin.com/in/yaotian-lin'
          title='linkedin link'
        >
          <AiFillLinkedin size='3rem' />
        </a>
        <a
          className='social-icons'
          href='https://github.com/Aaron-Lin-74'
          title='github link'
        >
          <AiFillGithub size='3rem' />
        </a>
      </div>
    </header>
  );
}

export default Header;
