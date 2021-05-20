import styled from "styled-components/macro";
import { COLORS } from "../../../styles/variables";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;
export const HeaderText = styled.h2`
  font-family: inherit;
  margin: 0;
  color: ${COLORS.black};
`;
