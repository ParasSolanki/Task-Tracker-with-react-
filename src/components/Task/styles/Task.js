import styled from "styled-components/macro";
import { COLORS } from "../../../styles/variables";

export const TaskContainer = styled.div`
  width: 100%;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.3rem;
  font-family: inherit;
  color: ${COLORS.white};
  background: ${COLORS.gray[700]};
  border-left: ${({ reminder }) =>
    reminder ? `5px solid ${COLORS.black}` : "none"};
`;

export const TaskHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TaskDateText = styled.p`
  font-family: inherit;
  font-size: 0.8rem;
  color: ${COLORS.whitesmoke};
`;
export const TaskText = styled.p`
  font-family: inherit;
  font-size: 1.2rem;
  margin-bottom: 0.1rem;
`;
