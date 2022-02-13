import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuNav from './components/MenuNav';
import Cart from './components/Cart';
import Produtos from './components/Produtos';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <MenuNav />
     <Cart />
     <Produtos />
     <Category />
     <Footer />
    </div>
  );
}

export default App;
