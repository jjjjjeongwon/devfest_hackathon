import React from 'react';
import { auth, db } from './shared/firebase';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const navigate = useNavigate();

  const signupFB = async () => {
    if (id_ref.current.value === '') {
      alert('아이디를 입력해주세요!');
    } else if (name_ref.current.value === '') {
      alert('이름을 입력해주세요!');
    } else if (pw_ref.current.value === '') {
      alert('비밀번호를 입력해주세요!');
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          id_ref.current.value,
          pw_ref.current.value
        );

        console.log(user);

        const user_doc = await addDoc(collection(db, 'users'), {
          user_id: user.user.email,
          name: name_ref.current.value,
        });

        console.log(user_doc.id);
        alert('회원가입 완료!');
        signOut(auth);
        navigate('/LogIn');
      } catch (e) {
        console.log(e);
        alert('아이디(이메일), 비밀번호를 형식에 맞게 기입해주세요!!');
      }
    }
  };

  return (
    <Wrap>
      <Logo>
        <img src="/images/KakaoTalk_Photo_2022-12-03-03-39-38.png" alt="" />
      </Logo>
      <LoginText>회원가입</LoginText>
      <InputBox>
        <Text>아이디(이메일)</Text>
        <Id ref={id_ref} placeholder="아이디를 입력해주세요" />
      </InputBox>

      <InputBox>
        <Text>비밀번호</Text>
        <Id
          ref={pw_ref}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </InputBox>

      <InputBox>
        <Text>이름</Text>
        <Id ref={name_ref} placeholder="이름을 입력해주세요" />
      </InputBox>

      <InputBox>
        <Text>성별</Text>
        <Id ref={name_ref} placeholder="성별을 입력해주세요" />
      </InputBox>

      <InputBox>
        <Text>생년월일</Text>
        <Id ref={name_ref} placeholder="생년월일을 입력해주세요" />
      </InputBox>

      <InputBox>
        <Text>혈액형</Text>
        <Id ref={name_ref} placeholder="혈액형을 입력해주세요" />
      </InputBox>

      <ButtonContainer>
        <Button onClick={signupFB}>회원가입</Button>
      </ButtonContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  margin: 30px auto;
  /* border : 1.5px solid lightslategray; */
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

const LoginText = styled.div`
  margin: 0px auto 20px;
  font-size: 25px;
  font-weight: bold;
`;

const InputBox = styled.div`
  width: 60%;
`;

const Text = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const Id = styled.input`
  height: 25px;
  width: 96%;
  margin-bottom: 15px;
  padding: 5px 5px;
  border-radius: 3px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1.5px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: seagreen;
  color: white;
  font-weight: bolder;
  border-radius: 3px;
`;

export default Signup;
