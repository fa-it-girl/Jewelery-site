import './App.css'
import { store } from './store/index';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/Root';
import SignIn from './components/SignIn';
import ShowMoreItem from './components/ShowMoreItem';
import NewArrivals from './components/NewArrivals';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImages from './components/ShowPage/CarouselImages';



const App = () => {

  const visibleItems = [];
  return (
    <Provider store={store}>
      <Router>
        <Routes >
          <Route path='/' element={<Root />}/>
          <Route path='/newArrival' element={<NewArrivals />} />
          <Route path="/moreItem" element={<ShowMoreItem />} />
          <Route path={`/moreItem/:ID`} element={<CarouselImages visibleItems={visibleItems}/>} />
          <Route path="/login" element={<SignIn />} />
        </Routes>

      </Router>
    </Provider>
  );
};

export default App;
