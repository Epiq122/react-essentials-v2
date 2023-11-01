import Header from './componets/Header';
import { CORE_CONCEPTS } from './data';
import styled from 'styled-components';

import CoreConcepts from './componets/CoreConcepts';
import Examples from './componets/Examples';

const App = () => {
  return (
    <>
      <Header
        image={{ src: CORE_CONCEPTS[0].image, alt: 'Stylized atom' }}
      ></Header>
      <MainStyled>
        <CoreConcepts />
        <Examples />
      </MainStyled>
    </>
  );
};
export default App;

const MainStyled = styled.main`
  width: 90%;
  max-width: 50rem;
  margin: auto;
  h2 {
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0 0 1.5rem 0;
    color: #a18aba;
  }
`;
