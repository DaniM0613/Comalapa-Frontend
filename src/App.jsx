
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />: <></>}
     <div className="w-4/5 m-auto pt-2">
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>}/>
    </Routes>
  </div>
  <Footer/>
    
    </>
  )
}

export default App