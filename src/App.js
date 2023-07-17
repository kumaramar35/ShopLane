
// import Electronics from './pages/Electronics';
import Jewellery from './pages/Jewellery';
import MensClothing from './pages/MensClothing';
import WomenClothing from './pages/WomenClothing';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainCartItems from './components/MainCartItems';
import FavItem from './components/FavItem';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';
import { Suspense, lazy } from 'react';

function App() {
  const Electronics = lazy(()=>import("./pages/Electronics"))
  return (
    <Router >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/electronics' element={<Suspense> <Electronics /></Suspense>} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/mensClothing' element={<MensClothing />} />
          <Route path='/womenClothing' element ={<WomenClothing />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<RegisterPage />} />
          <Route path='/cart' element={<MainCartItems />} />
          <Route path='/fav' element ={<FavItem />} />
          <Route path='/product/details/:id' element={<ProductDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default App;
