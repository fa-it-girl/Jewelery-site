import './FilterModal.css';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Stone from './FilterComponents/Stone';
import Metal from './FilterComponents/Metal';
import Price from './FilterComponents/Price';
import Color from './FilterComponents/Color';


const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDiamond, setShowDiamond] = useState(false)
  const [showMetal, setShowMetal] = useState(false)
  const [showPrice, setShowPrice] = useState(false)
  const [showColor, setShowColor] = useState(false)

  const ModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  const diamondHandler = () => {
     setShowDiamond(!showDiamond)
  }

  const metalHandler = () => {
    setShowMetal(!showMetal)
 }

 const priceHandler = () => {
   setShowPrice(!showPrice)
 }

 const colorHandler = () => {
  setShowColor(!showColor)
 }


  return(
    <>
    <Button variant="link" onClick={ModalHandler}>
        FILTER
      </Button>
      <Modal show={showModal}>
        <Modal.Header closeButton onClick={closeModalHandler} dialogClassName="sticky-top-modal">
          <Modal.Title>Filters</Modal.Title><hr />
        </Modal.Header>
        <Modal.Body>
          <div className='popup-filter-items'>
            <div>Stone</div>
            <div className='plus' onClick={diamondHandler} >+</div>
            {showDiamond && <Stone />}
          </div>
          <hr />
          <div className='popup-filter-items'>
            <div>Metal</div>
            <div className='plus' onClick={metalHandler}>+</div>
            {showMetal && <Metal />}
          </div>
          <hr />
          <div className='popup-filter-items'>
            <div>Price</div>
            <div className='plus' onClick={priceHandler}>+</div>
            {showPrice && <Price />}
          </div>
          <hr />
          <div className='popup-filter-items'>
            <div>Color</div>
            <div className='plus' onClick={colorHandler}>+</div>
            {showColor && <Color />}
          </div>


        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="danger" onClick={closeModalHandler}>
            Close
          </Button>
          <Button variant="dark" onClick={ModalHandler}>
            Store
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}
export default FilterModal;
