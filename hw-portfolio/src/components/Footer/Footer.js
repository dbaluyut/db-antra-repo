import { Link } from 'react-router-dom'

import './Footer.scss'
import fbLogo from '../../assets/images/facebook.svg'
import linkedInLogo from '../../assets/images/linkedin.svg'
import pinLogo from '../../assets/images/pinterest.svg'
import emailLogo from '../../assets/images/email.svg'
function Footer() {
  return (
    <footer className='Footer'>
      <div className='Footer_socials'>
        <div>
          <a href='#'>
            {' '}
            <img src={fbLogo} alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src={linkedInLogo} alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src={pinLogo} alt='' />
          </a>
          <a href='#'>
            {' '}
            <img src={emailLogo} alt='' />
          </a>
        </div>
        <div className='contact-info'>
          <h4>Phone: XXXXXX</h4>
          <h4>Email: XXXXX@gmail.com</h4>
        </div>
      </div>
      <div className='Footer_navigation'>
        <div class='company-information'>
          <h3>XXXX</h3>
          <h4>Copyright &copy; 2021</h4>
          <h4>NY</h4>
        </div>{' '}
        <div class='home-footer'>
          <h4>
            <a href='#'>Home</a>
          </h4>
        </div>
        <div class='portfolio-footer'>
          <h4>
            <a href='#'>Portfolio</a>
          </h4>
          <ul>
            <li>
              <a href='#'>Project1</a>
            </li>
            <li>
              <a href='#'>Project2</a>
            </li>
            <li>
              <a href='#'>Project3</a>
            </li>
            <li>
              <a href='#'>See All</a>
            </li>
          </ul>
        </div>
        <div class='resume-footer'>
          <h4>
            <a href='#'>Resume</a>
          </h4>
          <ul>
            <li>
              <a href='#'>Download</a>
            </li>
          </ul>
        </div>{' '}
        <div class='contact-footer'>
          <h4>
            <a href='#'>Contact</a>
          </h4>
        </div>
      </div>
    </footer>
  )
}
export default Footer
