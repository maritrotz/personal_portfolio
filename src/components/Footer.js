import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to="https://github.com/maritrotz"
              target='_blank'
              aria-label='Github'
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              class='social-icon-link'
              to="https://www.linkedin.com/in/kamari-trotz/"
              target='_blank'
              aria-label='Linkedin'
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
            <Link
              class='social-icon-link'
              to="mailto:maritrotz@gmail.com"
              target='_blank'
              aria-label='Email'
            >
              <i className="fa-solid fa-envelope" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer