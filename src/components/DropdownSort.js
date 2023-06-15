import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './FilterAndSort.css'


const DropdownSort = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        SORT
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">FEATURED</Dropdown.Item>
        <Dropdown.Item href="#/action-2">BEST SELLING</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ALPHABETICCALY A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ALPHABETICCALY Z-A</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PRICE LOW TO HIGH</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PRICE HIGH TO LOW</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  }
export default DropdownSort;
