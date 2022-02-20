import React from "React";
import styled from "styled-components";
import { Produtos } from "./Produtos";
import MenuNav from '../MenuNav';
import Footer from '../Footer';

export default class Login extends React.Component{
    render() {
        return (
            <>
                <MenuNav />
               
                <Footer />
            </>
        );
    }
}
