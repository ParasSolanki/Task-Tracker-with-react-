import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import {
  TaskContainer,
  TaskHeader,
  TaskText,
  TaskDateText,
} from "./styles/Task";

export default function Task({ task, onDelete, onToggleReminder }) {
  return (
    <TaskContainer key={task.id} reminder={task.reminder}>
      <TaskHeader
        onDoubleClick={() => {
          onToggleReminder(task.id);
        }}
      >
        <TaskText>{task.text}</TaskText>
        <FaTimes
          onClick={() => {
            onDelete(task.id);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </TaskHeader>
      <TaskDateText>{task.datetime}</TaskDateText>
    </TaskContainer>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  onToggleReminder: PropTypes.func,
};
