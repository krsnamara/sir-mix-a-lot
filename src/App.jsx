import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from './slices/cartCountSlice';
import { Route, Routes } from 'react-router-dom';
import {
  Contact,
  Dealers,
  Home,
  Shop,
  Specs,
  Support,
  Videos,
  Cart,
  Login,
} from './pages';
import { Footer, NavBar, Questions, EventBar } from './components';
import './App.css';

function App() {
  const [incrementAmount, setIncrementAmount] = useState(0);

  let dispatch = useDispatch();

  return (
    <>
      <EventBar />
      <Questions />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="card">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
          type="text"
        />
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increase by amount
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
