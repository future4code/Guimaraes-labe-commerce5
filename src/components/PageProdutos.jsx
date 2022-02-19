import React from "React";
import styled from "styled-components";
import { Produtos } from "./Produtos";

export default class Login extends React.Component{
    render() {
        return (
            <>
                <MenuNav />
                <Produtos />
                <Footer />
            </>
        );
    }
}
