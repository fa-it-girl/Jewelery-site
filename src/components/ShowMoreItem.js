import './ShowMoreItem.css';
// import logo from '../images/logo.png'
// import { Link } from 'react-router-dom';
import FilterAndSort from './FilterAndSort';
import Navbar from './Navbar';
// import FetchJewelery from './FetchJewelery';

import FetchJewelery from './FetchJewelery';


const ShowMoreItem = () => {
  return(
    <>
     <div className='more-item-navbar'>
       <Navbar />
    </div>
    <div className='show-more-item'>
    </div> <FilterAndSort />
    <FetchJewelery />
    {/* <AddJewelery /> */}
    </>
  )
}

export default ShowMoreItem;
