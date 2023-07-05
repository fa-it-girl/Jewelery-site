import './ClickableItems.css';
import { Container, Row, Col } from 'react-bootstrap'
const ClickableItems = () => {
  return(
    <>
    <h2 className='discover'>Discover</h2>
    <h3 className='everyday-pieces'>Our everyday pieces</h3>
     <Container >
      <Row>
        <Col className='earring-background back my-4' xs={12} md={3} >
         <h5>Earrings</h5>
        </Col>
        <Col className='ring-background back my-4' xs={12} md={3} >
         <h5>Rings</h5>
        </Col>
        <Col className='necklace-background back my-4' xs={12} md={3} >
         <h5>Necklaces</h5>
        </Col>
        <Col className='bracelet-background back my-4'xs={12} md={3}>
        <h5>Bracelets</h5>
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default ClickableItems;
