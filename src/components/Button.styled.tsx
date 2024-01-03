import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #9b1818;
  padding: 10px 20px;
  border-radius: 5px;
  color: aliceblue;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #ff90c3;
  }

  &:last-child {
    background-color: #c9ff11;
  }
`

export const SupperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #04eaff;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  } 
`