import React from 'react';
import styled from "styled-components";
import {StyledBtn, SupperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";


function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyledBtn*/}
                {/*    color="red"*/}
                {/*fontSize="20px"*/}
                {/*> HELLO WORLD</StyledBtn>*/}
                {/*<StyledBtn color="yellow"> HELLO WORLD</StyledBtn>*/}
                {/*<StyledBtn> HELLO WORLD</StyledBtn>*/}
                {/*<input type="text"/>*/}

                <StyledBtn btnType="primary" active> HELLO WORLD</StyledBtn>
                <StyledBtn btnType="outlined"> HELLO WORLD</StyledBtn>
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