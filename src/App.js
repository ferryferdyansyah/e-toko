import './App.css';
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import About from './components/About';
import Produk from './components/Produk';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Produk />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
