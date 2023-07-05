import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ExampleImages = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <img
            src='https://nuvomagazine.com/wp-content/uploads/2021/02/TrueLoveRightHandRing-Tourmaline-scaled.jpg'
            alt='example1'
            style={{ backgroundSize: 'cover', height: '600px', width: '100%', marginBottom:'20px' }}
          />
        </Col>
        <Col xs={12} md={6} >
          <img
            src='https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?s=612x612&w=0&k=20&c=miNpkI_ekZ8HoC0U9NhHNacsgcdq8xIFxR-n0zjO5p8='
            alt='example1'
            style={{ backgroundSize: 'cover', height: '600px', width: '100%',marginBottom:'20px' }}
          />
        </Col>
        <Col xs={12} md={6} >
          <img
            src='https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=pexels-pixabay-458766.jpg&fm=jpg'
            alt='example1'
            style={{ backgroundSize: 'cover', height: '600px', width: '100%',marginBottom:'20px' }}
          />
        </Col>
        <Col xs={12} md={6} >
          <img
            src='https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            alt='example1'
            style={{ backgroundSize: 'cover', height: '600px', width: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ExampleImages;
