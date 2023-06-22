
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import './CarouselImages.css'

const CarouselImages = (props) => {

  const location = useLocation();
   return(
    <>
     <Navbar/>
       <div className='show-page'>
         <div>
          <Carousel style={{height:'90vh', width:'600px', marginLeft:'10%', marginTop:'5%'}}>
          <Carousel.Item>
            <img className="d-block w-100 showPage" src={location.state.URL} alt='jeweleryimages' style={{height:'85vh', width:'500px'}}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 showPage" src={location.state.URL2} alt='jeweleryimages'style={{height:'85vh', width:'500px'}}/>
          </Carousel.Item>
        </Carousel>
         </div>
         <div>
           <div style={{height:'90vh', width:'60%', marginLeft:'10%', marginTop:'5%'}}>
          <h2>{location.state.name}</h2>
          <h3>Price: $ {location.state.price}</h3>
          <hr style={{ width:'80%', marginLeft:'10%'}}/>


          <h5 >Color:    {location.state.color}</h5>
          <hr style={{ width:'80%', marginLeft:'10%'}}/>
          <h5 >Stone:    {location.state.stone}</h5>
          <hr style={{ width:'80%', marginLeft:'10%'}}/>
          <h6>Details:  {location.state.details}</h6>
          <hr style={{ marginBottom:'20%',width:'80%', marginLeft:'10%'}}/>
          <label for="JEWELERY" style={{fontSize:'20px'}}>Select size:</label>
          <select id="JEWELERY" name="JEWELERY">
              <option value="volvo">XS</option>
              <option value="saab">S</option>
              <option value="fiat">M</option>
              <option value="audi">L</option>
          </select>
          <button className='addtobag'>Add to bag</button>
          </div>
         </div>
       </div>



    </>
   )
}

export default CarouselImages;
