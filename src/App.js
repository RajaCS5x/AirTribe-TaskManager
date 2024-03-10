import React, { useState } from "react";
import Section from "./components/Section";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
function App() {
  const intialsections = [
    {
      title: "Not Started",
      tasks: ["Task 1", "Task 2", "Task 3"],
      color: "#ffd4d8",
    },
    {
      title: "In Progress",
      tasks: ["Task 4", "Task 6"],
      color: "#fbf0d4",
    },
    {
      title: "Completed",
      tasks: ["Task 7", "Task 8", "Task 9"],
      color: "#cde8e2",
    },
  ];
  const addNewCard = (sectionIndex, newCard) => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[sectionIndex].tasks.push(newCard);
      return updatedSections;
    });
  };
  const moveTask = (
    fromSectionIndex,
    fromTaskIndex,
    toSectionIndex,
    toTaskIndex
  ) => {
    const updatedSections = [...sections];
    const movedTask = updatedSections[fromSectionIndex].tasks.splice(
      fromTaskIndex,
      1
    )[0];
    updatedSections[toSectionIndex].tasks.splice(toTaskIndex, 0, movedTask);
    setSections(updatedSections);
  };
  const [sections, setSections] = useState(intialsections);
  return (
    <>
    <Heading>Task Manager</Heading>
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Container>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  {" "}
                  {/* Wrap sections with React.Fragment */}
                  {sections.map((section, index) => (
                    <Section
                      key={index}
                      section={section}
                      index={index}
                      onAddNewCard={(newCard) => addNewCard(index, newCard)}
                      moveTask={moveTask}
                    />
                  ))}
                </React.Fragment>
              }
            />
            <Route
              path="/task/:sectionIndex/:taskIndex"
              element={
                <TaskDetails sections={sections} setSections={setSections} />
              }
            />
          </Routes>
        </Container>
      </Router>
    </DndProvider>
  </>
  );
}

export default App;
const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 2em;
  background:linear-gradient(90deg, rgba(52,51,51,1) 24%, rgba(180,106,34,1) 86%);
  font-weight: 500;
  color: white;
  margin: 0;
  padding: 20px;
`;
