import styled from 'styled-components';
import Example from './Example';
import { FC } from 'react';

interface TabContentProps {
  selectedExample: Example;
}

const TabContent: FC<TabContentProps> = ({ selectedExample }) => {
  return (
    <StyledTabContent>
      <h3>{selectedExample.title}</h3>
      <p>{selectedExample.description}</p>
      <pre>
        <code>{selectedExample.code}</code>
      </pre>
    </StyledTabContent>
  );
};
export default TabContent;

const StyledTabContent = styled.div`
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
