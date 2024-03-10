import React from 'react'
import styled from 'styled-components';
function Header({ props }) {
    return (
        <Container>


            <Title style={{ backgroundColor: props.color }}>{props.title}</Title>
           <Count>Task-Count: {props.tasks.length}</Count>
        </Container>
    )
}

export default Header

const Container = styled.div`   
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 98%;
    border: 2px solid gray;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
`;
const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    margin : 0;
`;
const Count = styled.p`
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    margin : 0;
`;