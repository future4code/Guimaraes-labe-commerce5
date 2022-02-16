import React from "react";
import styled from "styled-components";

const LoginScreen = styled.div`
width: 100vw;
height: 100vh;
background-image: url(https://cdn.mos.cms.futurecdn.net/yjgAsDgrpQYuGkG7Wmn9qU.jpg);
display: flex;
align-items: center;
justify-content: center;

    a {
        color: white;
        font-size: 3rem;
        text-decoration: none;

            :hover{
                color: crimson;
            }
            :active{
                transform: rotateX(90deg);
                transform: rotateY(90deg);
                transition: all 3s;
            }        
    }
`

export default class Login extends React.Component {
  render() {
    return (
      <LoginScreen >
      <a onClick={this.props.onClickLogin}>VOCÊ ESTÁ PRONTO PARA O FUTURO?</a>
      </LoginScreen>
    );
  }
}
