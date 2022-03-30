import React from 'react';
import Typical from 'react-typical';
import './Hero.scss';

function Hero() {
  return (
    <section className='profile-container'>
      <div className='profile-details'>
        <div className='profile-parent'>
          <div className='profile-left'>
            <div className='profile-details-name'>
              <span className='primary-text'>Hi, I am Aaron</span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                <Typical
                  steps={[
                    'Frontend Developer',
                    1500,
                    'Motivated Tech Enthusiast',
                    2000,
                    'MERN Stack Developer',
                    2000,
                    'AWS Certified Solutions Architect Associate',
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </span>
            </div>
          </div>
          <div className='profile-right'>
            <div className='profile-picture'>
              <img
                src={process.env.PUBLIC_URL + '/images/Yaotian_Lin.jpg'}
                alt='my profile'
              />
            </div>
          </div>
        </div>
        <div className='profile-details-text'>
          <span className='primary-text'>
            <h2>
              I am a highly motivated <strong>Frontend Developer</strong> who is
              passionate about web development.
            </h2>
            <p>
              My experiences include front-end web development (React, Redux,
              JavaScript ES6/TypeScript, HTML5, and CSS3/SASS), back-end web
              development (Node/Express, REST API), and AWS Cloud
              infrastructure.
            </p>
          </span>
        </div>
        <div className='profile-options'>
          <a href='#contact'>
            <button>Hire Me</button>
          </a>
          <a
            href='Aaron(Yaotian)_Lin_Resume.pdf'
            download='Aaron(Yaotian)_Lin_Resume.pdf'
          >
            <button>View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
