
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from './Component/Category';
import Thucphamtuoisong from './Component/Thucphamtuoisong';
import Trungvasua from './Component/Trungvasua'
import Thucphamkho from './Component/Thucphamkho'
import Thucphamdinhduong from './Component/Thucphamdinhduong'
import Giavi from './Component/Giavi'
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Route , Routes  } from 'react-router-dom';
import Uudaihot from './Component/Uudaihot';
import Detailuudaihot from './Component/Detailuudaihot';
import Detailthucphamtuoisong from './Component/Detailthucphamtuoisong'
import Detailtrungvasua from './Component/Detailtrungvasua'
import Detailgiavi from './Component/Detailgiavi'
import Detailthamphamkho from './Component/Detailthucphamkho'
import Detailthucphamdinhduong from './Component/Detailthucphamdinhduong'
import Cart from './Component/Cart'
import Hethongcuahang from './Component/Hethongcuahang';
import Chinhsach from './Component/Chinhsach';
import User from './Component/User';
import Signin from './Component/Signin';

function App() {


 
 

 
 const  handleAddToCart = (table , id , name , promotionalPrice , img1 ) => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let existingItem = cartItems.find(item => item.id === `${table}-${id}`);
  if (existingItem) {
    console.log('sản phẩm đã có trong giỏ hàng');
    toast.error('Sản phẩm đã có trong giỏ hàng', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    console.log('Thêm vào giỏ hàng thành công')
    cartItems.push({  
      id: `${table}-${id}`,
      name: name,
      promotionalPrice: promotionalPrice,
      img1: img1
    });
    toast.success('Thêm vào giỏ hàng thành công', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
  
}

  return (
  <>

  


  <Header/>
  <ToastContainer />

      {/* router */}
    <Routes>

      <Route path='/' element={<Category handleAddToCart={handleAddToCart} />} />
      <Route path='/uudaihot' element={<Uudaihot handleAddToCart={handleAddToCart}/>}/>
      <Route path='/thucphamtuoisong' element={<Thucphamtuoisong handleAddToCart={handleAddToCart}/> }/>
      <Route path='/trungvasua' element={<Trungvasua handleAddToCart={handleAddToCart}/>}/>
      <Route path='/giavi' element={<Giavi handleAddToCart={handleAddToCart}/>}/>
      <Route path='/thucphamkho' element={ <Thucphamkho handleAddToCart={handleAddToCart}/>}/>
      <Route path='/thucphamdinhduong' element={<Thucphamdinhduong handleAddToCart={handleAddToCart}/>}/> 
      <Route path='/uudaihot/:id' element={<Detailuudaihot handleAddToCart={handleAddToCart}/>} />
      <Route path='/thucphamtuoisong/:id' element={<Detailthucphamtuoisong handleAddToCart={handleAddToCart}/>} />
      <Route path='/trungvasua/:id' element={<Detailtrungvasua handleAddToCart={handleAddToCart}/>}/>
      <Route path='/giavi/:id' element={<Detailgiavi handleAddToCart={handleAddToCart}/>}/>
      <Route path='/thucphamkho/:id' element={<Detailthamphamkho handleAddToCart={handleAddToCart}/>}/>
      <Route path='/thucphamdinhduong/:id' element={<Detailthucphamdinhduong handleAddToCart={handleAddToCart}/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/hethongcuahang' element={<Hethongcuahang/>}/>
      <Route path='/chinhsach' element={<Chinhsach/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/dangki' element={<Signin/>}/>
    </Routes>
   

  <Footer/>
  </>
  );
}

export default App;
