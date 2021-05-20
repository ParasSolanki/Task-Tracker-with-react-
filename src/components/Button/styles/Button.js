import styled from "styled-components";
import { COLORS } from "../../../styles/variables";

export const HeaderButton = styled.button`
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  color: white;
  background: ${({ btnColor }) =>
    btnColor === "green" ? COLORS.green[600] : "red"};
  border: none;
  font-family: inherit;
  font-size: 0.9rem;
  border-radius: 0.4rem;
`;
