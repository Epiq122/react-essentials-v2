import { FC } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  image: { src: string; alt: string };
}

let reactDescriptions: string[];
reactDescriptions = ['Fundemental', 'Crucial', 'Core'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

const Header: FC<HeaderProps> = ({ image }) => {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <Wrapper>
      <StyledImage src={image.src} alt={image.alt} />
      <Title>React Essentials</Title>
      <StyledParagraph>
        {description} React concepts you will need for almost any app you are
        going to build!
      </StyledParagraph>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.header`
  text-align: center;
  margin: 3rem 0;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 5rem;
  background: linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
`;
const StyledParagraph = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: #8964b0;
  font-family: 'Roboto Condensed', sans-serif;
`;

const StyledImage = styled.img`
  height: 5rem;
  width: 10rem;
  object-fit: cover;
`;
