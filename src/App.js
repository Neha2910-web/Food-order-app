import React ,{useState}from 'react'
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './Store/CartProvider'


const App = () => {
const [cartIsShown, setCartIsShown]=useState(false)

const cratShowHandler=()=>{
  setCartIsShown(true)
}
const cartHideHandler=()=>{
  setCartIsShown(false)
}
  return (
    <CartProvider>
     {cartIsShown  && <Cart onClose={cartHideHandler}/>}
      <Header onShowCart={cratShowHandler}/>
      <main>
         <Meals/>  
      </main>
   
    </CartProvider>
  )
}

export default App



