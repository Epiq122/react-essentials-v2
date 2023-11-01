import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};
export default Section;

const StyledSection = styled.section`
  margin: 3rem auto;
`;
