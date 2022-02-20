import React from 'react';
import MenuNav from '../MenuNav';
import Cart from '../Cart';
import ProdutosDestaque from '../ProdutosDestaque';
import Category from '../Category';
import Footer from '../Footer';
import HomeP from "../HomeP/HomeP";
import { Switch, Route, Link } from 'react-router-dom';
import { Produtos } from './Produtos';


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


