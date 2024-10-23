import Landing from './components/Landing'
import Signup from './components/Signup'
import Login from './components/Login'
import Forget from './components/Forget'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Layout from './components/dashboard/Layout'
import Home from './pages/Home'
import Active from './pages/Active'
import Past from './pages/Past'
import Account from './pages/Account'
import Payment from './pages/Payment'
import Courier from './pages/Courier'






function App() {
 

  return (
    
  <BrowserRouter>
  <Routes>
    
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='forget' element={<Forget />}/>
      <Route path='/' element={<Landing />}/>
      <Route path='/dashboard' element={<Layout />} >
      <Route index element={<Home />}/>
      <Route path="active" element={<Active />}/>
      <Route path="past" element={<Past />}/>
      <Route path="account" element={<Account />}/>
      <Route path="payment" element={<Payment />}/>
      <Route path="courier" element={<Courier />}/>
      
      
      </Route>
      
    
  </Routes>
  
  </BrowserRouter>
  
  )
}

export default App
