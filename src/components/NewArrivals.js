import './NewArrivals.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import ClickableItems from './ClickableItems';
import ExampleItem from './ExamplesItem';
import UserReviews from './Homepage/UserReviews';
import ExampleImages from './Homepage/ExampleImages';


const NewArrivals = () => {
  const navigate = useNavigate()

  const ShowMoreItemHandler = () => {
    navigate('/moreItem')
  }
   return (
    <>
     <div>
      <Navbar />
      <div className="new-arrival-background fluid">

        <div className='new-arrival'>
          <h1 className=''>NEW ARRIVALS</h1>
          <button className='btn-responsive'onClick={ShowMoreItemHandler}>Shop now</button>
        </div>
      </div>
          <ClickableItems />
          <ExampleItem />
          <ExampleImages />
          <UserReviews />
     </div>

    </>
   )
}
export default NewArrivals;
