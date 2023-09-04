import React, { useState } from 'react';
import styled from 'styled-components';
import LoginNav from '../../components/LoginNav/LoginNav';

const Login = () => {
  const [userInfo, setuserInfo] = useState({ userID: '', userPW: '' });
  const { userID, userPW } = userInfo;
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setuserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.userID.length >= 5 && userInfo.userPW.length >= 8;

  return (
    <>
      <LoginNav />
      <LoginPage>
        <LoginLogo src="images/Nav/main_logo.png" />
        <LoginIdInput
          type="text"
          name="userID"
          value={userID}
          onChange={onChangeHandler}
          placeholder="아이디"
        />
        <LoginPwInput
          type="text"
          name="userPW"
          value={userPW}
          onChange={onChangeHandler}
          placeholder="비밀번호"
        />
        <LoginSubmitBtn disabled={isValid ? false : true}>
          로그인
        </LoginSubmitBtn>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginLogo = styled.img`
  margin-top: 30px;
  width: 250px;
`;

const LoginIdInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
`;

const LoginPwInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 30px;
`;

const LoginSubmitBtn = styled.button`
  width: 300px;
  height: 50px;
`;
