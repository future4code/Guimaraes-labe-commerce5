import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  background-color: gray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
`;
export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: gray;
`;

export const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top,dimgray,purple);
  box-shadow: 2px 2px 3px black  ;
  width: 200px;
  height: 80vh;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
`;

export const CrescenteDecrescente = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50vw;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  align-items: center;
  height: 105vh;
`;
export const Card = styled.div`
  flex-direction: column;
  border: 2px solid purple;
  background-image: linear-gradient(to top,purple,black);
  box-shadow: 2px 2px 3px black  ;

  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  height: 300px;
  width: 200px;
  margin: 2px;
  padding: 2px;
`;
export const Button = styled.div`

  padding: 3px;
    background-color: whitesmoke;
    box-shadow: 2px 2px #666;
    border: 0.5px grey solid;
    border-radius: 5%;
    color: black;
    cursor: pointer;

    :hover{
        background-color: #dadada;
    }

    :active{
        background-color: #dadada;
        transform: translateY(2px);
    }
`;

export const ContainerCarrinho = styled.div`
  flex-direction: column;
  background-image: linear-gradient(to bottom,dimgray,purple);
  box-shadow: 2px 2px 3px black  ;
  width: 300px;
  height: 95vh;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;


export const IconeX = styled.strong`
  :hover {
    cursor: pointer;
    color: purple;
  }
`;


export const Checkbox = styled.input`
display: inline-block;
margin-left: 10px;
margin-top: 8px;

`

