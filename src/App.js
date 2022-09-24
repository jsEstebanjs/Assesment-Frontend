import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/404';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:productId' element={<ProductDetail  />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
