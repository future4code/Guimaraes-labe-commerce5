import React from "react";
import styled from "styled-components";

const CursorTexto = styled.a`
cursor: pointer;
color: white;
font-size: 3rem;
text-decoration: none;
      :hover{
               transition: 1s;
               color: purple;
      }
`

const LoginScreen = styled.div`
width: 100vw;
height: 100vh;
background-image: url(https://cdn.mos.cms.futurecdn.net/yjgAsDgrpQYuGkG7Wmn9qU.jpg);
display: flex;
align-items: center;
justify-content: center;

animation: fadein 3s; /* Padrão */
-webkit-animation: fadein 3s; /* Webkit */
-moz-animation: fadein 3s; /* Firefox */
-ms-animation: fadein 3s; /* IE */
}
@keyframes fadein {
from { opacity: 0; }
to { opacity: 1; } /* Padrão */
}

@-moz-keyframes fadein {
from { opacity: 0; }
to { opacity: 1; } /* Firefox */
}
`

export default class PageInicial extends React.Component {
  render() {
    return (
      <LoginScreen >
      <CursorTexto onClick={this.props.onClickLogin}>VOCÊ ESTÁ PRONTO PARA O FUTURO?</CursorTexto>
      </LoginScreen>
    );
  }
}
