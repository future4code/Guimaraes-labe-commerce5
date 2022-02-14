import React from 'react'
import styled from 'styled-components'



const Text = styled.h2`
    position:absolute;
    text-align: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 5px;
    color:#FFF;
    top:35%;
    bottom:35%;
    left:27%;
    right:27%;
    font-size: 50px;

`
const ImgBG = styled.img`
    width:98.7vw;
`

export default function Cart() {
    return (
        <div>
            <ImgBG src="/assets/bg.jpg" alt="Background" />
            <Text>Last Frontier Store</Text> 
        </div>
    )
}
