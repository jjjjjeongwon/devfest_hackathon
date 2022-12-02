import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import SelectPage from './SelectPage';
import Login from './Login';
import Signup from './Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selectpage" element={<SelectPage />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  background-color: darkseagreen;
  height: 100%;
`;

export default App;
