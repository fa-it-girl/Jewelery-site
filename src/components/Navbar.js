import { useState } from "react"
import './Navbar.css'
import logo from '../images/logo.png'
import './Navbar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
// import NewArrivals from "./NewArrivals";
import { useNavigate } from "react-router-dom";
import DropdownEarring from './DropdownEarring'


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const[isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(true)
  };
  const toggleButtonHandler = () => {
    navigate('/login')
  };

  return (
    <>

    <nav className="navigation">
      <Link to="/" className="brand-name"> {/* Use Link component instead of anchor tag */}
        <img src={logo} alt="bjuteria logo" />
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
           <li className={`list-navbar ${isDropdownOpen ? 'open' : ''}`} >
             <h4 onClick={toggleDropdown}>EARRING</h4>
             {isDropdownOpen && <DropdownEarring />}
           </li>
           <li className="list-navbar">
             <h4>RING</h4>
           </li>
           <li className="list-navbar">
             <h4>BRACALET</h4>
           </li>
           <li className="list-navbar">
             <h4>NECKLACE</h4>
           </li>
          <li className="list-navbar">
            <h4 onClick= {toggleButtonHandler} className='sign'>SIGN IN</h4>
          </li>
          <li>
          <FontAwesomeIcon icon={faBasketShopping} />
          </li>
        </ul>
      </div>

    </nav>

    {/* <Avatar /> */}
    {/* <Carousel /> */}
    {/* <NewArrivals /> */}
    </>
    );

}
