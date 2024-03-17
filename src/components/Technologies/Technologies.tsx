import React from 'react';
import './Technologies.scss';

function Technologies() {
  return (
    <section id='tech' className='tech-container'>
      <h2 className='section-title'>Technologies</h2>
      <h3>
        I've worked with a range a technologies in the web development world.
        <br />
        From Front-End To Back-End.
      </h3>
      <div className='tech-list-container'>
        <ul>
          <li>
            <h4 className='list-title'>Front-End</h4>
            <p>
              Experiece with <br />
              React.js <br />
              JavaScript <br />
              TypeScript <br />
              HTML5 <br />
              CSS3 / SCSS <br />
            </p>
          </li>
          <li>
            <h4 className='list-title'>Back-End</h4>
            <p>
              Experiece with <br />
              Node.js <br />
              Express <br />
              PostgreSQL <br />
              MongoDB <br />
              REST API <br />
            </p>
          </li>
          <li>
            <h4 className='list-title'>Other</h4>
            <p>
              Experiece with <br />
              AWS <br />
              Testing <br />
              CI/CD <br />
              Python
              <br />
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Technologies;
