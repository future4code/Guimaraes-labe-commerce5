import React from 'react'
import styled from 'styled-components'

const FooterPag = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-family: 'Arial Narrow', Arial, sans-serif;
height: 15vh;

    background:#2b2e2e;
    height:40vh;
    

`
const UlNav = styled.ul`
    letter-spacing: 3px;
    margin-left: 32px;
    display: flex;

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

`
export default function Footer() {
  return (
    <FooterPag>
            <UlNav>
                <li><a href="#">Parceiros</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="../Cart.jsx">Contatos</a></li>
            </UlNav>
        </FooterPag>
  )
}
