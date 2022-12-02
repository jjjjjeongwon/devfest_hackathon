import React from 'react'
import {auth, db} from "./shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {getDocs, where, query, collection} from "firebase/firestore";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';



const Login = () => {
    const id_ref =React.useRef(null);
    const pw_ref = React.useRef(null);
    const navigate = useNavigate();
    const loginFB =async() =>{
        console.log(id_ref.current.value, pw_ref.current.value);
        if(id_ref.current.value === "" || pw_ref.current.value ===""){
          alert("아이디, 비밀번호를 입력해주세요!");
        }else{
          try{
            const user = await signInWithEmailAndPassword(auth,
              id_ref.current.value, 
              pw_ref.current.value
              );
              console.log(user.user.email);
             
  
              
                alert("로그인 완료!");
                navigate("/selectpage");
                // window.location.replace("/");
          }catch(e){
            alert("로그인 정보를 확인해주세요!")
          }
          
        };

    }


  return (
    <Wrap>
        <Logo>
          <img src="/images/KakaoTalk_Photo_2022-12-03-03-39-38.png" alt="" />
        </Logo>
        <LoginText>
            로그인
        </LoginText>
    <InputBox>
    <Text>
        아이디(이메일)
        </Text>
         <Id type="text" ref={id_ref}  /> 
        </InputBox>
        <InputBox>
        <Text>
        비밀번호 
        </Text>
         <Id ref={pw_ref} type="password"/> <br/><br/>
         </InputBox>
         <ButtonContainer>
        <Button onClick={loginFB} >로그인</Button>
        <SignupButton onClick={() => {
                navigate("/signup");
              }} >아직 회원이 아니신가요?</SignupButton>
        </ButtonContainer>
    </Wrap>

  )
}


const Wrap = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height : 100%;
    margin: 80px auto;

    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 5%;
    background-color: white;
`;

const Logo = styled.a`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const LoginText =styled.div`
margin: 0px auto 20px;
    font-size: 25px;
    font-weight: bold;
`;
const InputBox =styled.div`
     width : 60%;
`;

const Text =styled.div`
    font-size: 13px;
    font-weight: bold;
`;

const Id =styled.input`
width: 97%;
    height: 25px;
    margin-bottom: 15px;
    padding: 5px 5px;
    border-radius: 3px;
    border-bottom: 2px solid rgb(219, 232, 216);
    border : 1px solid lightslategray;
    font-size: 12px;
    font-weight: 500;
    background-color: none;
    
`;

const ButtonContainer =styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 60%;
`;

const Button =styled.button`
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    background-color: seagreen;
    color:white;
    font-weight: bolder;
    border-radius: 3px;
`;

const SignupButton =styled.div`
    font-size: 13px;
    cursor: pointer;
    &:hover {
    font-weight: bold;
  }
`;

export default Login;