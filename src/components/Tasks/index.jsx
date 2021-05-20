import React from "react";
import PropTypes from "prop-types";
import Task from "../Task";
import { TasksContainer } from "./styles/Tasks";

export default function Tasks({ tasks, onDelete, onToggleReminder }) {
  return (
    <TasksContainer>
      {tasks.length > 0
        ? tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggleReminder={onToggleReminder}
              />
            );
          })
        : "No Task to show"}
    </TasksContainer>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggleReminder: PropTypes.func,
};
