import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export default App;
