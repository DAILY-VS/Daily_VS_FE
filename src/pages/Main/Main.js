import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';
import MainGrid from './MainGrid/MainGrid';
import 'swiper/swiper-bundle.min.css';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/carouselData.json')
      .then(response => response.json())
      .then(result => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <MainPage>
        <MainCarousel loading={loading} />
        <MainGrid />
      </MainPage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
`;

const MainPage = styled.h1`
  color: black;
`;

export default Main;
