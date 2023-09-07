import React from 'react';
import styled from 'styled-components';

const MainGridCard = ({ id, url, name }) => {
  return (
    <Container>
      <GridThumbnail src={url} alt={name} />
      <GridName>{name}</GridName>
    </Container>
  );
};

export default MainGridCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridThumbnail = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const GridName = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
