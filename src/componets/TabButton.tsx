import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface TabButtonProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
}

const TabButton: FC<TabButtonProps> = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={() => onClick()}>{children}</button>
    </li>
  );
};
export default TabButton;

export const StyledTabButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: #a18aba;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1b082f;
    color: #ebe7ef;
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: #7925d3;
    color: #ebe7ef;
  `}
`;
