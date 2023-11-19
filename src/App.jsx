import { useState } from 'react';
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
import { Footer, NavBar, Questions } from './components';
import './App.css';

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <Questions />
      <NavBar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Cart />} />
        <Route path="/contact" element={<Login />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase the count {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrease the count {count}
        </button>
      </div>
      <Footer count={count} />
    </>
  );
}

export default App;
