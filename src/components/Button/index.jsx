import React from "react";
import { HeaderButton } from "./styles/Button";
import PropTypes from "prop-types";

export default function Button({ text, btnColor, onClick }) {
  return (
    <HeaderButton onClick={onClick} btnColor={btnColor}>
      {text}
    </HeaderButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  btnColor: PropTypes.string,
  onClick: PropTypes.func,
};
