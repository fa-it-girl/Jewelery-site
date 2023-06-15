import './FilterAndSort.css';
import DropdownSort from './DropdownSort';
import FilterModal from './FilterModal';


const FilterAndSort = () => {
  return(
    <>
      <div className='filter-and-sort'>
        <div className='none'></div>
        <div ><DropdownSort /></div>
        <div className='filter'><FilterModal /></div>
      </div>
    </>
  )
}

export default FilterAndSort;
