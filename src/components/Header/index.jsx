import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import { HeaderContainer, HeaderText } from "./styles/Header";

export default function Header({ showForm, setShowForm }) {
  return (
    <HeaderContainer>
      <HeaderText>Task Tracker</HeaderText>
      <Button
        text={showForm ? "Close" : "Add"}
        btnColor={showForm ? "red" : "green"}
        onClick={setShowForm}
      />
    </HeaderContainer>
  );
}

Header.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};
