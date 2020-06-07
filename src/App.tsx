import React from 'react';
import './App.css';
import { socialNavBar, webshopRouter } from './components/navigation.components';
import { Cart } from './components/cart/cart.component';
import { Provider } from 'react-redux';
import { store } from "./store";

require('dotenv').config();

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Cart />{socialNavBar}{webshopRouter}
      </Provider>
    </div>
  );
}

export default App;
