import './FetchJewelery.css';
import { useState, useEffect } from 'react';
import MyPagination from './Pagination';
import { useReward } from 'react-rewards';
import { useNavigate } from "react-router-dom";


const FetchJewelery = () => {
  const [jeweleries, setJewelery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
  const itemsPerPage = 16;
  const totalItems = jeweleries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jewelery.free.beeceptor.com/todos');
      const data = await response.json();
      setJewelery(data);
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

  const showPageHandler = () => {
    navigate('/moreItem/info')
  }



  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = jeweleries.slice(startIndex, endIndex);

  return (
    <>
      <h2 className="popular mt-5 mb-5 pl-3">New Arrivals</h2>
      <div className="jewelery-container">
        {visibleItems.map((jewelery) => (
          <div className="jewelery-list" key={jewelery.ID} jewelery={jewelery}>
            <div className="jewelery" onMouseEnter={() => handleMouseEnter(jewelery.ID)}
              onMouseLeave={handleMouseLeave}>
              <img
                onClick={showPageHandler}
                src={hoveredItemId === jewelery.ID ? jewelery.URL2 : jewelery.URL}
                alt="JEWELERYImage"

              />
              <h4 className="title">{jewelery.name}</h4>
              <h6 className="price">€{jewelery.price} <input type="number" id="quantity" name="quantity" min="1" max="5"></input></h6>
              <button type='submit' name='submit' disabled={isAnimating}
               onClick={reward}><span id="rewardId" /> Add to basket</button>

            </div>
          </div>
        ))}
      </div>
      <MyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className='mt-5'
      />
    </>
  );
};

export default FetchJewelery;
