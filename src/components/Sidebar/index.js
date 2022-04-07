import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="diana" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#588752" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#588752" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active"   
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#588752" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar