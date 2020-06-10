import React from 'react';
import { Card } from 'semantic-ui-react';

const  items = [
  {
    header: 'Doctor or Medical User',
    description:
      'If you are a doctor, you can use this system to help you recognize the melanoma stadium.',
    onClick: () => location.href = '/doctor',
  },
  {
    header: 'Non-medical user',
    description:
      'If you are a person who have a symptomp melanoma alike, you can use this system to help you reassure your symptomp.',
    onClick: () => alert('Tokek'),
  },
];

const Home = (props) => {
  console.log('PROPS', props);
  return <Card.Group centered items={items} />;
};

export default Home;