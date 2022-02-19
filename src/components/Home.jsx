import React from 'react';
import MenuNav from './MenuNav';
import Cart from './Cart';
import ProdutosDestaque from './ProdutosDestaque';
import Category from './Category';
import Footer from './Footer';



export default class Home extends React.Component {
    render() {
      return (
      <>
        <MenuNav />
        <Cart />
        <ProdutosDestaque />
        <Category />
        <Footer />
      </>
      
      );
    }
  }


