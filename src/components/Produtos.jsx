import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
margin-top:90px;
margin-bottom:45px;
text-align: center;
font-weight: 500;
letter-spacing: 5px;


`

const Card = styled.div`
    max-width: 40%; 
    text-align: center;
    justify-content: space-around;

`

const ContainerProdutos = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`
const CardImg = styled.div`
    
    background:#F7F7F7 ;
    text-align: center;
    height:450px;
    width:400px;

    img{
        margin-top: 10px;
        width:75%;
        height:95%;
    }

`
const BtnCenter = styled.div`
    text-align: center;
    border: 1px black solid;
    width:230px;
    margin:auto;
    background:#000;

    h3{
        font-family: 'Arial Narrow', Arial, sans-serif;
        font-weight: 500;
        letter-spacing: 4px;
        padding:5px;
        color:#fff;
    }
`
export default function Produtos() {
  return (
    <div>
        <TitleH1> PRODUTOS EM DESTAQUE</TitleH1>
        
        <ContainerProdutos>
            <Card >
                <CardImg>
                   <img src="/assets/sateliteSovietico.png" alt="Background"/>
                </CardImg>

                <div>
                    <p>Antigo Satelite da União Soviética</p>
                    <p>R$ 1,2 milhoes</p>
                    <button>Adionar ao carrinho</button>
                   
                </div>
                
            </Card >

              <Card >
                <CardImg>
                   <img src="/assets/onibus.jpg" alt="Background"/>
                </CardImg>

                <div>
                    <p>Onibus espacial da NASA</p>
                    <p>R$ 4,2 milhoes</p>
                    <button>Adionar ao carrinho</button>
                </div>
                
            </Card > 

               
        </ContainerProdutos>

        <BtnCenter>
             <h3>Todos os Produtos</h3>
        </BtnCenter>  
        
        
    </div>
  )
}
