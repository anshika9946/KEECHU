
import './css/Navbar.css'; // Import your CSS file
import Logo from '/src/assets/kee.png'; // Import your logo image
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/merch">Merch</NavLink>
      </div>
      <div className="logo">
      <NavLink to="/"> <img src={Logo} alt="Logo" /></NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/newsletter">Newsletter</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
