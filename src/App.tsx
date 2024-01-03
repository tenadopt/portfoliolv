import React from 'react';
import styled from "styled-components";
import {StyledBtn, SupperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href="#">Link Component</StyledBtn>
                <StyledBtn as="a" href="#"> Link HELLO WORLD</StyledBtn>
                <StyledBtn> HELLO WORLD</StyledBtn>
                <SupperBtn> SUPER HELLO WORLD</SupperBtn>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor: pointer;
  }
  
  ${Link} {
    cursor: zoom-in;
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  } 
`