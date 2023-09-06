import React from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';

const Main = () => {
  return (
    <Container>
      <MainPage>
        <MainCarousel />
      </MainPage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 1000px;
`;

const MainPage = styled.h1`
  color: darkblue;
`;

export default Main;
