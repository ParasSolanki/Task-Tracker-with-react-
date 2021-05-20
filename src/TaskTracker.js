import React, { useState } from "react";
import { Header, Form, Tasks } from "./components";
import styled from "styled-components/macro";
import { COLORS } from "./styles/variables";

export default function TaskTracker() {
  const [TasksList, setTasksList] = useState([]);
  const [ShowAddTaskForm, setShowAddTaskForm] = useState(false);

  // add task to TasksList
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const taskWithId = { id, ...task };
    setTasksList([...TasksList, taskWithId]);
  };

  // delete task from TasksList..
  const deleteTask = (id) => {
    setTasksList(TasksList.filter((task) => task.id !== id));
  };

  // toggle reminder in TasksList..
  const toggleReminder = (id) => {
    setTasksList(
      TasksList.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Container>
      <Header
        showForm={ShowAddTaskForm}
        setShowForm={() => setShowAddTaskForm(!ShowAddTaskForm)}
      />
      {ShowAddTaskForm && <Form addTask={addTask} />}
      <Tasks
        tasks={TasksList}
        onDelete={deleteTask}
        onToggleReminder={toggleReminder}
      />
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  padding: 1rem;

  background: ${COLORS.blue[300]};

  border: 1px solid gray;
  border-radius: 0.3rem;
`;
