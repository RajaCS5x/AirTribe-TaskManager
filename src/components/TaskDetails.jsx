import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function TaskDetails({ sections, setSections }) {
    const navigate = useNavigate();
    const { sectionIndex, taskIndex } = useParams();

    const currentSection = sections[sectionIndex];
    const currentTask = currentSection.tasks[taskIndex];

    const [editedTitle, setEditedTitle] = useState(currentTask);
    const [editedSection, setEditedSection] = useState(currentSection.title);

    const handleSave = () => {
        // Create a copy of the sections array to avoid mutating state directly
        const updatedSections = [...sections];

        // Update the name and section of the task
        updatedSections[sectionIndex].tasks[taskIndex] = editedTitle;
        updatedSections[sectionIndex].title = editedSection;

        // Update the state with the modified sections
        setSections(updatedSections);

        // Redirect back to the main page after saving
        navigate("/");
    };

    return (
        <Container>
            <TitleInput
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <SaveButton onClick={handleSave}>Save</SaveButton>
        </Container>
    );
}

export default TaskDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const TitleInput = styled.input`
  height: 30px;
  width: 90%;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SectionInput = styled.input`
  height: 30px;
  width: 90%;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SaveButton = styled.button`
  height: 40px;
  width: 90%;
  margin: 10px 0;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
