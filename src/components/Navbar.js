import { useState, useEffect } from "react"
import './Navbar.css'
import logo from '../images/logo.png'
import './Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropdownEarring from './DropdownEarring';
import DropdownRings from "./DropdownRing";
import DropdownBracalet from "./DropdownBracalet";
import DropdownNecklace from "./DropdownNecklace";
import HeaderButton from "./Cart/HeaderButton";


export default function Navbar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const[isDropdownOpen, setIsDropdownOpen] = useState(false)
  const[isDropdownRingOpen, setIsDropdownRingOpen] = useState(false)
  const[isDropdownBracaletOpen, setIsDropdownBracaletOpen] = useState(false)
  const[isDropdownNecklaceOpen, setIsDropdownNecklaceOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    let timer;
    if (isDropdownOpen) {
      timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isDropdownOpen]);


  const toggleDropdown = () => {
    setIsDropdownOpen(true)
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const toggleDropdownRing = () => {
    setIsDropdownRingOpen(true)
  };

  const closeDropdownRing = () => {
    setIsDropdownRingOpen(false)
  }

  const toggleDropdownBracalet = () => {
    setIsDropdownBracaletOpen(true)
  };

  const closeDropdownBracalet = () => {
    setIsDropdownBracaletOpen(false)
  }

  const toggleDropdownNecklace = () => {
    setIsDropdownNecklaceOpen(true)
  };

  const closeDropdownNecklace = () => {
    setIsDropdownNecklaceOpen(false)
  }
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
           <li className='list-navbar' >
             <h4  onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>EARRING</h4>
             {isDropdownOpen && <DropdownEarring />}
           </li>
           <li className="list-navbar">
             <h4 onMouseEnter={toggleDropdownRing} onMouseLeave={closeDropdownRing}>RING</h4>
             {isDropdownRingOpen && <DropdownRings />}
           </li>
           <li className="list-navbar">
             <h4 onMouseEnter={toggleDropdownBracalet} onMouseLeave={closeDropdownBracalet}>BRACALET</h4>
             {isDropdownBracaletOpen && <DropdownBracalet />}
           </li>
           <li className="list-navbar">
             <h4 onMouseEnter={toggleDropdownNecklace} onMouseLeave={closeDropdownNecklace}> NECKLACE</h4>
             {isDropdownNecklaceOpen && <DropdownNecklace />}
           </li>
          <li className="list-navbar">
            <h4 onClick= {toggleButtonHandler} className='sign'>SIGN IN</h4>
          </li>
          {/* <li>
          <header className='header'>
        <HeaderButton onClick={props.onShowCart} />
      </header>
          </li> */}
        </ul>
      </div>

    </nav>

    {/* <Avatar /> */}
    {/* <Carousel /> */}
    {/* <NewArrivals /> */}
    </>
    );

}
