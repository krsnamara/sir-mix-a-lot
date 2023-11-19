import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Questions from './components/Questions/Questions';
import { Contact, Dealers, Home, Shop, Specs, Support, Videos } from './pages';
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
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase the count {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrease the count {count}
        </button>
      </div>
    </>
  );
}

export default App;
