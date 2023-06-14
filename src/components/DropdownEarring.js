import './DropdownEarring.css'
import './Navbar.css';

const DropdownEarring = () => {

  return (
    <>
      <div className='earring-dropdown' style={{ marginTop: '60px' }}>
        <div className='earring-dropdown-item'>
          <p>Hoop Earring</p>
          <p>Charm Earring</p>
          <p>Stud Earring</p>
          <p>Cartilage Earring</p>
        </div>
        <div className='earring-dropdown-item'>
          <p>Drop Earring</p>
          <p>Ear Climbers</p>
          <p>Ear Cuffs</p>
          <p>Single Earring</p>
        </div>
        <div className='earring-dropdown-item'>
          <img src='https://assets.hermes.com/is/image/hermesproduct/loop-earrings-small-model--105117B%2000-worn-2-0-0-800-800_g.jpg' alt=''earring/>
        </div>
        <div className='earring-dropdown-item4'>
          <img src='https://i.etsystatic.com/26620502/r/il/c8ad37/4582501269/il_570xN.4582501269_80ua.jpg' alt='earring2'/>
        </div>
      </div>
    </>
  )

}

export default DropdownEarring;
