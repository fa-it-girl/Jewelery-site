import './Pagination.css'
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    if (pageNumber === currentPage) return;
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <>

    <Pagination style={{textAlign:'CENTER'}}>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      />
      {renderPaginationItems()}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      />
    </Pagination>
    <Footer />
    </>

  );
};


export default MyPagination;
