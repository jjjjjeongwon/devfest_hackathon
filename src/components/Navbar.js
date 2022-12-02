import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return <Header>Find Your Disease</Header>;
};

const Header = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default Navbar;
