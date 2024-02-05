import logo from '../assets/discord-logo-white.png'
import './Navbar.css'

function Navbar(props) {
    console.log(props.children);
    return (
        <nav>
            {props.children /*children is not displayed until we tell it to do so*/}
            <ul>
                <img className="image-logo" src={logo} alt="discord logo" />
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;