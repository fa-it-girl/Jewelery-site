import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css'

function DropdownRings() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rings
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Trillion</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Baguette</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Oval</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Radiant</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cushion</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Round</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownRings;
