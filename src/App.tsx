import React from 'react';
import './App.css';
import { socialNavBar, webshopRouter } from './components/navigation.components';
import { Cart } from './components/cart/cart.component';
import { Provider } from 'react-redux';
import { store } from "./store";

require('dotenv').config();

const App = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Provider store={store}>
        <div style={{width: '20rem', order: 2}}>
          <Cart />{socialNavBar}
        </div>
        {webshopRouter}
      </Provider>
    </div>
  );
}

export default App;
