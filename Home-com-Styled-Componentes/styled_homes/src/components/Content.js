import React from 'react';

import styled from 'styled-components';

const Content = styled.main `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 500px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Item = styled.p `
    color: #fff;
    text-align: center;
    font-family: "Read";
    margin: 0 20px 0 20px;
    padding: 10px;
    background-color: #5193A8;
`

export default function components(){
    return (
        <React.Fragment>
            <Content>
                <Item>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Item>
                <Item>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Item>
            </Content>
        </React.Fragment>
    );
}