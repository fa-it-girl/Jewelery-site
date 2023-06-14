import './NewArrivals.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
const NewArrivals = () => {
  const navigate = useNavigate()

  const ShowMoreItemHandler = () => {
    navigate('/moreItem')
  }
   return (
    <>
     <div className="new-arrival-background">
       <Navbar />
       <div className='new-arrival'>
        <h1>NEW ARRIVALS</h1>
       <button onClick={ShowMoreItemHandler}>Shop now</button>
      </div>
     </div>

    </>
   )
}
export default NewArrivals;
