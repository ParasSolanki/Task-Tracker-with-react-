import styled from "styled-components/macro";
import { COLORS } from "../../../styles/variables";

export const FormContainer = styled.form`
  width: 100%;
  margin-bottom: 1rem;
`;

export const FormControl = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

export const LabelInLine = styled.label`
  display: inline-block;
  cursor: pointer;
  margin-left: 0.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-family: inherit;
`;

export const InputCheckbox = styled.input`
  display: inline-block;
`;

export const SubmitButton = styled.input`
  width: 100%;
  padding: 0.4rem 0.5rem;
  background: ${COLORS.black};
  color: white;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
`;
