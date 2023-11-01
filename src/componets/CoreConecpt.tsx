import { FC } from 'react';
import styled from 'styled-components';

interface CoreConceptProps {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

const CoreConecpt: FC<CoreConceptProps> = ({ title, description, image }) => {
  return (
    <CoreConceptsItem>
      <img src={image.src} alt={image.alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </CoreConceptsItem>
  );
};
export default CoreConecpt;

export const CoreConceptsWrapper = styled.section`
  padding: 2rem;
  border-radius: 6px;
  background-color: #140524;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

const CoreConceptsItem = styled.li`
  width: 10rem;
  text-align: center;

  img {
    height: 4rem;
    width: 6rem;
    object-fit: cover;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const CoreConceptsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;
