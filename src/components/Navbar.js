import React from 'react';
import styled from 'styled-components';
import {useNavigate}  from 'react-router-dom';

const Navbar = () => {

    const navigate =useNavigate();
  return(
//    <Header>Find Your Disease</Header>;
<Header>
<Logo href="/">
          <img src="/images/KakaoTalk_Photo_2022-12-03-03-39-38.png" alt="" />
        </Logo>
        <LogoExplain>Find Your Disease</LogoExplain>

        <ButtonContainer>
            <LogoutButton
            onClick={() => {
                navigate("/");
              }}
            >logout</LogoutButton>
        </ButtonContainer>
        </Header>
  )
};

const Header = styled.div`
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 90px;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const LogoExplain = styled.div`
    margin-left: 10px;
    font-size: 20px;
`;

const ButtonContainer =styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-right: 20px; */

`;

const LogoutButton = styled.button`
    width:80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: darkseagreen;
    cursor: pointer;
`;


export default Navbar;
