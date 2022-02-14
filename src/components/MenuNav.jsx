import React from 'react'
import styled from 'styled-components'

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    height: 15vh;
    
 
    li{
        list-style: none;
        letter-spacing: 3px;
        margin-left: 32px;
    }

    a{
        color: #fff;
        list-style: none;
        text-decoration: none;
    }

    a:hover{
        color: gray;
        text-shadow: 0.5px 0.5px black;
    }

`

const UlNav = styled.ul`
    letter-spacing: 3px;
    margin-left: 32px;
    display: flex;


`
const Header = styled.header`
        background:#2b2e2e;
        display:flex;
        justify-content: space-around;
`
export default function MenuNav() {
  return (
    <Header>

        <NavMenu>
        <UlNav>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Produtos</a></li>
                
            </UlNav>
        </NavMenu>

        <NavMenu>
            <UlNav>
                <li><a href="#">Login</a></li>
                <li><a href="#">Carrinho</a></li>
                <li><a href="../Cart.jsx">Contatos</a></li>
            </UlNav>
        </NavMenu>
    </Header>
  )
}
