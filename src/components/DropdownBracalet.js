import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css'

const DropdownBracalet = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Bracalet
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Pendant Necklace</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Choker</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Collar Necklace</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Charms</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Opera</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Matinee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownBracalet;
