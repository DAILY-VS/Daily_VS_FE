import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-slide {
    text-align: center;
  }

  img {
    max-width: 100%;
  }
`;

const MainCarousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = './images/Carousel/computer.jpg'; // 이미지 주소를 변경하세요
    img.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CarouselSection>
      <h2>Single Item</h2>
      {imagesLoaded && (
        <StyledSlider {...settings}>
          <div>
            <img src="./images/Carousel/computer.jpg" alt="이미지 1" />
          </div>
          <div>
            <img src="./images/Carousel/ive.webp" alt="이미지 2" />
          </div>
          <div>
            <img src="./images/Carousel/pandas.jpg" alt="이미지 3" />
          </div>
        </StyledSlider>
      )}
    </CarouselSection>
  );
};

export default MainCarousel;

const CarouselSection = styled.div`
  display: flex;
`;
