import React from 'react'
import styled from 'styled-components'
import Category from './Category';
import Footer from './Footer';

import HomeP from "./HomeP/HomeP";
import { ContainerGeral } from "./HomeP/Style";
import MenuNav from './MenuNav';


export class Produtos extends React.Component {
    state = {
        produtos: [
          {
            id: 1,
            name: "Item A",
            value: 50.0,
            imageUrl: "https://picsum.photos/200/200?a=1",
            favorito: false,
          },
          {
            id: 2,
            name: "Item B",
            value: 20.0,
            imageUrl: "https://picsum.photos/200/200?a=2",
            favorito: false,
          },
          {
            id: 3,
            name: "Item C",
            value: 150.0,
            imageUrl: "https://picsum.photos/200/200?a=3",
            favorito: false,
          },
          {
            id: 4,
            name: "Item D",
            value: 349.0,
            imageUrl: "https://picsum.photos/200/200?a=4",
            favorito: false,
          },
          {
            id: 5,
            name: "Item E",
            value: 23.55,
            imageUrl: "https://picsum.photos/200/200?a=5",
            favorito: false,
          },
          {
            id: 6,
            name: "Item F",
            value: 123.0,
            imageUrl: "https://picsum.photos/200/200?a=6",
            favorito: false,
          },
          {
            id: 7,
            name: "Item G",
            value: 27.0,
            imageUrl: "https://picsum.photos/200/200?a=7",
            favorito: false,
          },
          {
            id: 8,
            name: "Item H",
            value: 950.0,
            imageUrl: "https://picsum.photos/200/200?a=8",
            favorito: false,
          },
        ],
        ordenado: false,
        contador: 1,
        novaListaCarrinho: [],
    
        valorInputBusca: "",
        valorInputMinimo: "",
        valorInputMaximo: "",
        checkboxFavoritos: false
      };
    
    render() {
      return (
          <>
            <HomeP />
         
          </>
      )
    }
  }