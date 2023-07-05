import './FetchJewelery.css';
import { useState, useEffect } from 'react';
import MyPagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const FetchJewelery = () => {
  const [jeweleries, setJeweleries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const itemsPerPage = 16;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://64942e8e0da866a953674fe3.mockapi.io/jewels/jewels');
      const data = await response.json();
      setJeweleries(data);
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = (itemId) => {
    setHoveredItemId(null);
  };

  const showPageHandler = (jewelery) => {
    navigate(`/moreItem/${jewelery.ID}`, { state: jewelery });
  };



  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = jeweleries.slice(startIndex, endIndex);

  return (
    <>
      <h2 className="popular mt-5 mb-5 pl-3">New Arrivals</h2>
      <div className="jewelery-container">
        {visibleItems.map((jewelery) => (
          <div className="jewelery-list" key={jewelery.ID}>
            <div
              className="jewelery"
              onMouseEnter={() => handleMouseEnter(jewelery.ID)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                onClick={() => showPageHandler(jewelery)}
                src={hoveredItemId === jewelery.ID ? jewelery.URL2 : jewelery.URL}
                alt="JEWELERYImage"
              />
              <h4 className="title">{jewelery.name}</h4>
              <h6 className="price">€{jewelery.price}</h6>

            </div>
          </div>
        ))}
      </div>
      <MyPagination
        currentPage={currentPage}
        totalPages={Math.ceil(jeweleries.length / itemsPerPage)}
        onPageChange={handlePageChange}
        className="mt-5"
      />
    </>
  );
};

export default FetchJewelery;
