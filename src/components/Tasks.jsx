import React from 'react'
import styled from 'styled-components';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';

function Tasks({ props, index, moveTask, updateTasksOrder, sectionIndex }) {
    const [, ref] = useDrag({
        type: 'TASK',
        item: { index, sectionIndex },
    });

    const [, drop] = useDrop({
        accept: 'TASK',
        hover: (draggedItem) => {
            if (draggedItem.index !== index || draggedItem.sectionIndex !== sectionIndex) {
                moveTask(draggedItem.sectionIndex, draggedItem.index, sectionIndex, index);
                draggedItem.index = index;
                draggedItem.sectionIndex = sectionIndex;
            }
        },
    });
    return (
        <Container ref={(node) => ref(drop(node))} >
            <Title>{props}</Title>
            <Icons>
                <Link to={`/task/${sectionIndex}/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                    <MdEdit/>
            </Icons>
        </Container>
    );
}

export default Tasks;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 80%;
    max-width: 150px;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0 10px;
    margin: 5px;
    
`;

const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    margin: 0;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    font-size: 1.5em;
    color: #555;
    margin-left: 10px;
    cursor: pointer;
`;