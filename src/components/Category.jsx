import React from 'react'
import styled from 'styled-components'

const ContainerCategory = styled.div`
    margin-top:150px;
    display:flex;
    flex-direction: row;
    background-image: linear-gradient(to top,rgba(4,4,4,.65),rgba(54,54,54,.2));

`

const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width:33vw;
    height: 90vh;

    img{
        padding: 5px;
        width:90%;
        height:70%;
    }

    h1{
        color:#fff;
    }

`
const BtnCenter = styled.div`
    width:230px;
    background:#FFF;
    text-align: center;
    border: 1px #080000 solid;
    border-radius: 5%;
    

    h3{
        font-family: 'Arial Narrow', Arial, sans-serif;
        font-weight: 500;
        letter-spacing: 4px; 
        padding:5px;
        color:#080000;
        transition: all 1 s;
        cursor: pointer;
        
    }

    h3:hover{
        transform: scale(1.1);
        transition: all 1s;
    }
`



export default function Category() {
  return (
<ContainerCategory>
    <Box>
        <img src="/assets/crew.jpg" alt="" />
        <h1>Foguetes</h1>
        <BtnCenter>
             <h3>Todos os Produtos</h3>
        </BtnCenter> 
    </Box>

    <Box>
    <img src="/assets/sateliteSovietico.png" alt="" />
        <h1>Satelites</h1>
        <BtnCenter>
             <h3>Todos os Produtos</h3>
        </BtnCenter> 
    </Box>

    <Box>
    <img src="/assets/brinquedoFogeute.jpg" alt="" />
        <h1>Acessórios</h1>
        <BtnCenter>
             <h3>Todos os Produtos</h3>
        </BtnCenter> 
    </Box>
</ContainerCategory>
  )
}
