import React, { useState } from 'react'
import styled from 'styled-components';
function NewCard({ onAddNewCard }) {
    const [newCard, setNewCard] = useState('');

    const handleInputChange = (e) => {
        setNewCard(e.target.value);
    };

    const handleAddCard = () => {
        if (newCard.trim() !== '') {
            onAddNewCard(newCard);
            setNewCard('');
        }
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Enter task"
                value={newCard}
                onChange={handleInputChange}
            />
            <AddButton onClick={handleAddCard}>
                <Title>Add new Task</Title>
            </AddButton>
        </Container>
    );
}

export default NewCard;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px solid gray;
    width: 28vw;
    height: 15vh;
    box-sizing: border-box;
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  `;

const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0 8px;
    cursor: pointer;
  `;

const Input = styled.input`
    height: 30px;
    width: 80%;
    margin: 10px 0;
    padding: 0 10px;
    border: 2px solid gray;
    border-radius: 3px;
  `;

const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    margin: 0;
  `;