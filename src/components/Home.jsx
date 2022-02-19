import React from 'react';
import MenuNav from './MenuNav';
import Cart from './Cart';
import Produtos from './Produtos';
import Category from './Category';
import Footer from './Footer';
import {PagProdutos} from './PagProdutos'



export default class Home extends React.Component {
    render() {
      return (
        <>
          <MenuNav />
          <PagProdutos/>
        </>
      
      );
    }
  }


