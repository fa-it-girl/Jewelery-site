import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';

const CarouselImages = (props) => {
  const params = useParams();
  const itemId = parseInt(params.ID);

  let item = props.visibleItems[itemId - 1]

   return(
    <>
      <Carousel style={{height:'400px', width:'400px'}}>
        <Carousel.Item>
          <img className="d-block w-100" src={item?.jewelery.URL} alt='jeweleryimages'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={item?.URL2} alt='jeweleryimages'/>
        </Carousel.Item>
      </Carousel>
    </>
   )
}

export default CarouselImages;
