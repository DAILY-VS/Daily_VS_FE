import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMenuSection>Footer 입니다~</FooterMenuSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 10vh;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.blueBgColor};
`;

const FooterMenuSection = styled.div`
  font-size: 20px;
`;
