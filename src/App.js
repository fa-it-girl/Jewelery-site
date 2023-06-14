
import { store } from './store/index';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/Root';
import SignIn from './components/SignIn';
import ShowMoreItem from './components/ShowMoreItem';
import NewArrivals from './components/NewArrivals';

const App = () => {
  return (
    <Provider store={store}>
      <Router>

        {/* Render the Root component outside of the Routes */}
        <Routes >
          <Route path='/' element={<Root />}/>
          <Route path='/newArrival' element={<NewArrivals />} />

        </Routes>
        <Routes>
            <Route path="/moreItem" element={<ShowMoreItem />} />

        </Routes>
        <Routes >
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
