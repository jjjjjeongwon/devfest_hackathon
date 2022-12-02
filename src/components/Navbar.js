import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return <Header>Find Your Disease</Header>;
};

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  box-sizing: border-box;
`;

export default Navbar;
