import './ExampleItem.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ExampleItem = () =>{
  return(
    <>
    <hr />
       <Container >
        <Row >
          <Col >
            <img src='https://d1pztvg1hh2s9f.cloudfront.net/flvvkfejnjat1zmd8ov4hws1bfhv' alt='luxery'></img>
            <h5 >Luxury Jewellery</h5>
            <h6>Precious jewellery you won't find anywhere else, made just for you</h6>
          </Col>
          <Col>
            <img src='https://d1pztvg1hh2s9f.cloudfront.net/pcigqf2cbaenx7lrn03ckswnjxz5' alt='luxery'></img>
            <h5>Exceptional Designs</h5>
            <h6>Handmade by the World's best jewellery designers</h6>
          </Col>
          <Col>
            <img src='https://d1pztvg1hh2s9f.cloudfront.net/gagdstbi1peoxn0fjnqc0cdsx0f5' alt='luxery'></img>
            <h5>100% Quality Guaranteed</h5>
            <h6>Everything is checked and authenticated by our experts</h6>
          </Col>
          <Col>
            <img src='https://d1pztvg1hh2s9f.cloudfront.net/8afl0cbgy0mqha1ffg1dy7m7xjtw' alt='luxery'></img>
            <h5>Buyer Protection</h5>
            <h6>We keep the money safe until your dream jewellery is in your hands</h6>
          </Col>

        </Row>
       </Container>
       <hr />
    </>
  )
}

export default ExampleItem;
