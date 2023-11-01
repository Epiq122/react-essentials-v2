import { useState } from 'react';
import Example, { ExampleWrapper, ExampleMenu } from './Example';
import Section from './Section';

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Components');
  const handleClick = (tabName: string) => {
    setSelectedTab(tabName);
    console.log(tabName);
  };
  return (
    <Section title='Examples'>
      <ExampleWrapper>
        <ExampleMenu>
          <Example selectedTab={selectedTab} handleClick={handleClick} />
        </ExampleMenu>
      </ExampleWrapper>
    </Section>
  );
};

export default Examples;
