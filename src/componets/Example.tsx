import { StyledTabButton } from './TabButton';
import { EXAMPLES } from '../data';
import { FC } from 'react';
import styled from 'styled-components';

interface ExampleProps {
  selectedTab: string;
  handleClick: (tabName: string) => void;
}

interface Example {
  title: string;
  description: string;
  code: string;
}

const Example: FC<ExampleProps> = ({ selectedTab, handleClick }) => {
  const selectedExample = EXAMPLES.find(
    (example) => example.title === selectedTab,
  );
  return (
    <div>
      {EXAMPLES.map((example: Example) => (
        <StyledTabButton
          key={example.title}
          onClick={() => handleClick(example.title)}
          selected={selectedTab === example.title}
        >
          {example.title}
        </StyledTabButton>
      ))}
      {selectedExample && (
        <TabContent>
          <h3>{selectedExample.title}</h3>
          <p>{selectedExample.description}</p>
          <pre>{selectedExample.code}</pre>
        </TabContent>
      )}
    </div>
  );
};
export default Example;

export const ExampleWrapper = styled.section`
  margin: 3rem auto;

  h2 {
    text-align: left;
  }
`;

export const ExampleMenu = styled.menu`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: #a18aba;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const TabContent = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: #2f1d43;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  h3 {
    margin: 0;
  }

  code {
    font-size: 1rem;
  }
`;
