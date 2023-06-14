import './ShowMoreItem.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const ShowMoreItem = () => {
  return(
    <>
    <div className='show-more-item'>
    <Link to='/'><img src={logo} alt="bjuteria logo" /></Link>
    </div>
    </>
  )
}

export default ShowMoreItem;
