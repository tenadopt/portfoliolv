import React from 'react';
import styled from "styled-components";

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

const StyledBtn = styled.button`
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

const Link = styled.a`
  color: blue;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
  
`

const SupperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #04eaff;
`

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
`

const Menu = styled.nav`
ul {
  list-style: none;
  padding: 0;
  display: flex;
  
  li > a {
    color: green;
  }
  
  li+li {
    margin-left: 20px;
  }
}
`