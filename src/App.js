import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ResultButton from "./components/ResultButton";
import SelectSymptomBox from "./components/SelectSymptomBox";

function App() {

  
  return (

  <Container>
    
    <Navbar/>
    <SelectSymptomBox/>
    <ResultButton/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;





export default App;
