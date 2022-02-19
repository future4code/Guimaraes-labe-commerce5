import React from 'react'
import styled from 'styled-components'
import PageInicial from './PageInicial'
import { PagProdutos } from './PagProdutos'

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    height: 10vh;
    width: 90%;
    
 
    li{
        list-style: none;
        letter-spacing: 3px;
        margin-left: 30px;
        margin-right: 30px
    }

    a{
        color: #fff;
        list-style: none;
        text-decoration: none;
        

        :hover{
            color: purple;
            text-shadow: 5px 5px 6px black;
        }
    }
`

// const Logout = styled.p`
//     color: #fff;
//     list-style: none;
//     letter-spacing: 3px;
//     margin-left: 32px;
//     text-decoration: none;
//     cursor: pointer;

//     :hover{
//         color: gray;
//         text-shadow: 5px 5px 6px black;
//     }
// `

const UlNav = styled.ul`
    letter-spacing: 3px;
    display: flex;


`
const Header = styled.header`
        background:#2b2e2e;
        display:flex;
        justify-content: space-around;
        aling-items: center;
`

const IconeMenu = styled.img`
        width:65px;
`


export default class MenuNav extends React.Component {
    state = {
        produto: ""
      };

      irParaProduto = () => {
        this.setState({ produto: "produtos" });
        console.log('To rolando')
      };

   
    render() {

        let secao;

        switch (this.state.produto) {
          case "produtos":
            secao = <PageInicial />;
            break;
             default:
            secao = <p>Nenhuma seção selecionada</p>;
        }

      return (
        <Header>
        
            <IconeMenu src="/assets/IconeNave.png"/>
        
        <NavMenu>            
            <UlNav>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Produtos</a></li>
                <button onClick={this.irParaProduto}>produtos</button>
                
            </UlNav>
        
            <UlNav>
                <li><a href="#">Carrinho</a></li>
                <li><a href="../Cart.jsx">Logout</a></li>
            </UlNav>
        </NavMenu>
    </Header>
      );
    }
  }