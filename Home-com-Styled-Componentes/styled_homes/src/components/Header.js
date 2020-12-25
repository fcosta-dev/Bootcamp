import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #457667;
position: realative;
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
`

const Item = styled.p `
    font-size: 16px;
    font-family: 'Read';
    font-weight: bold;
    color: #fff;
    padding: 0 50px 0 50px;
`

export  default function header() {
    return(
        <Nav>
            <Item>Home</Item>
            <Item>Contato</Item>
            <Item>Sobre</Item>
        </Nav>
    );
};