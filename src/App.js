import React from 'react'
import Header from './components/Header';

import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';

//nb=
const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Header/>


      <Route path="/" exact component={HomeScreen}/>
      
      <Route path="/cart" exact component={CartScreen}/>
      

      </BrowserRouter>

      

      
    </div>
  )
}

export default App

