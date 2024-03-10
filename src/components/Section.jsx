import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

import Header from './Header';
import NewCard from './NewCard';
import Tasks from './Tasks';
function Section({ section, onAddNewCard, index, moveTask }) {
    const [tasks, setTasks] = useState(section.tasks);

    const handleAddNewCard = (newCard) => {
        setTasks((prevTasks) => [...prevTasks, newCard]);
        onAddNewCard(newCard);
    };

    const updateTasksOrder = (newTasks) => {
        setTasks(newTasks);
    };

    return (
        <Container>
            <Header props={section} />
            {tasks.map((task, taskIndex) => (
                <Tasks
                    key={taskIndex}
                    props={task}
                    index={taskIndex}
                    moveTask={moveTask}
                    updateTasksOrder={updateTasksOrder}
                    sectionIndex={index}
                />
            ))}
            <NewCard onAddNewCard={handleAddNewCard} />
        </Container>
    );
}

export default Section;
const Container = styled.div`
    display: flex;
    flex-direction: column; /* Added */
    justify-content: space-between; /* Added */
    align-items: center;
    height: 60vh;
    max-height: auto;
    width: 30vw;
    box-sizing: border-box;
    margin: 1rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
`;

