import { FC } from 'react';
import { CORE_CONCEPTS } from '../data';
import CoreConcept, {
  CoreConceptsWrapper,
  CoreConceptsList,
} from './CoreConcept';

const CoreConcepts: FC = () => {
  return (
    <CoreConceptsWrapper>
      <CoreConceptsList>
        {CORE_CONCEPTS.map(({ title, description, image }, index) => (
          <CoreConcept
            key={index}
            title={title}
            description={description}
            image={{ src: image, alt: title }}
          />
        ))}
      </CoreConceptsList>
    </CoreConceptsWrapper>
  );
};
export default CoreConcepts;
