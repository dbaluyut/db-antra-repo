import { Link } from 'react-router-dom'

import './NavBar.scss'
import logo from '../../assets/images/logo.svg'
function NavBar(props) {
  return (
    <nav className='NavBar'>
      <img src={logo} alt='logo' />
      <div>
        {props.links.map((item) => {
          return (
            <Link to={item == 'Home' ? '/' : item.toLowerCase()}>{item}</Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
