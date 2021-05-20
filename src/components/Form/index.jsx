import React, { useState } from "react";
import {
  FormContainer,
  FormControl,
  Input,
  Label,
  SubmitButton,
  LabelInLine,
  InputCheckbox,
} from "./styles/Form";

import PropTypes from "prop-types";

export default function Form({ addTask }) {
  const [Task, setTask] = useState("");
  const [DateTime, setDateTime] = useState("");
  const [Reminder, setReminder] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (Task === "") {
      alert("add task is empty");
      return;
    }

    addTask({ text: Task, datetime: DateTime, reminder: Reminder });

    setTask("");
    setDateTime("");
    setReminder(false);
  };

  return (
    <FormContainer method="post" onSubmit={submitForm}>
      <FormControl>
        <Label htmlFor="task">Add Task</Label>
        <Input
          type="text"
          name="task"
          id="task"
          placeholder="Add your task"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="date-time">Date & Time</Label>
        <Input
          type="datetime-local"
          name="date-time"
          id="date-time"
          value={DateTime}
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
        />
      </FormControl>
      <FormControl>
        <InputCheckbox
          type="checkbox"
          name="reminder"
          id="reminder"
          checked={Reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        />
        <LabelInLine htmlFor="reminder">Reminder</LabelInLine>
      </FormControl>
      <SubmitButton type="submit" value="Add Task" />
    </FormContainer>
  );
}

Form.propTypes = {
  addTask: PropTypes.func,
};
