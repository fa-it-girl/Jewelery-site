import React from 'react';
import './UserReview.css'
import Carousel from 'react-bootstrap/Carousel';


const UserReviews = () => {
  return (
    <Carousel className="carousel-container pt-5 mt-5 ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/233/56/desktop-wallpaper-light-gray-solid-color-background-1-contract-logistics-pvt-ltd-2560x1440-light-grey.jpg"
          alt="First slide"
          style={{height: '400px'}}
        />
        <Carousel.Caption>
          <h5 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus orci vel porttitor commodo. Vivamus feugiat cursus nisl at ultrices. Etiam id sem ut neque vehicula pellentesque. Cras id enim magna</h5>
          <h6>-Fakhriyya Rahimova-</h6>
          <p >★★★★★</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/233/56/desktop-wallpaper-light-gray-solid-color-background-1-contract-logistics-pvt-ltd-2560x1440-light-grey.jpg"
          alt="Second slide"
          style={{height: '400px'}}
        />
        <Carousel.Caption>
          <h5 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus orci vel porttitor commodo. Vivamus feugiat cursus nisl at ultrices. Etiam id sem ut neque vehicula pellentesque. Cras id enim magna</h5>
          <h6 >-Raul Sheydayev-</h6>
          <p >★★★★★</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/233/56/desktop-wallpaper-light-gray-solid-color-background-1-contract-logistics-pvt-ltd-2560x1440-light-grey.jpg"
          alt="Third slide"
          style={{height: '400px'}}
        />
        <Carousel.Caption>
          <h5 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus orci vel porttitor commodo. Vivamus feugiat cursus nisl at ultrices. Etiam id sem ut neque vehicula pellentesque. Cras id enim magna</h5>
          <h6 >-Mursal Sheydayev-</h6>
          <p >★★★★★</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default UserReviews;
