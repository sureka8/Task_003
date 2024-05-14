
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Aboutus from './pages/Abouts_us'
import Menu from './pages/Menu'

import Singleproduct from './component/product/Singleproduct';
import Cart from './component/cart/Cart';
import Footer from './component/Footer';
import ConfirmOrder from './component/cart/ConfirmOrder';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
       <Header />
    <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<Aboutus />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/contactus' element={<Contact />} />
    <Route path='/menu/singleproduct/:id' element={<Singleproduct />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/confirm/order' element={<ConfirmOrder />} />

  
   
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
