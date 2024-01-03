import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnType>`
  border: none;
  
  padding: 10px 20px;
  border-radius: 5px;
  color: aliceblue;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  
  ${props => props.btnType === "outlined" && css<StyledBtnType>`
    color: ${props => props.color || "green"};
    background-color: transparent;
    border: 2px solid ${props => props.color || "green"};

    &:hover {
      border-color: #cb3d3d;
      color: #cb3d3d;
      background-color: transparent;
    }
  `}
  
  ${props => props.btnType === "primary" && css<StyledBtnType>`
    background-color: ${props => props.color || "green"};
    color: snow;

    &:hover {
      background-color: #ff90c3;
    }
    
    ${props => props.active && css<StyledBtnType>`
      box-shadow: 5px 5px 5px 5px #b9b5b5;
    `}
    
  `}
  
    
  
  
  
    
  
`

export const SupperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #04eaff;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  } 
`