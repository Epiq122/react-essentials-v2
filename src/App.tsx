import Header from './componets/Header';
import CoreConecpt, {
  CoreConceptsList,
  CoreConceptsWrapper,
} from './componets/CoreConecpt';
import { CORE_CONCEPTS } from './data';
import styled from 'styled-components';

import { useState } from 'react';
import Examples, { ExamplesMenu, ExamplesWrapper } from './componets/Examples';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Components');

  const handleClick = (tabName: string) => {
    setSelectedTab(tabName);
    console.log(tabName);
  };
  return (
    <>
      <Header
        image={{ src: CORE_CONCEPTS[0].image, alt: 'Stylized atom' }}
      ></Header>
      <MainStyled>
        <CoreConceptsWrapper>
          <CoreConceptsList>
            {CORE_CONCEPTS.map(({ title, description, image }, index) => (
              <CoreConecpt
                key={index}
                title={title}
                description={description}
                image={{ src: image, alt: title }}
              />
            ))}
          </CoreConceptsList>
        </CoreConceptsWrapper>
        <ExamplesWrapper>
          <h2>Examples</h2>
          <ExamplesMenu>
            <Examples selectedTab={selectedTab} handleClick={handleClick} />
          </ExamplesMenu>
        </ExamplesWrapper>
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
