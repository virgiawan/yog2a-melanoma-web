import React, {Fragment} from 'react';
import { Card } from 'semantic-ui-react';
import { Router } from 'fusion-plugin-react-router/dist-node-cjs/server';



const Home = (props) => {
  const  items = [
    {
      header: 'Doctor or Medical User',
      description:
        'If you are a doctor, you can use this system to help you recognize the melanoma stadium.',
      onClick: () => location.href = '/upload?user=doctor',
    },
    {
      header: 'Non-medical user',
      description:
        'If you are a person who have a symptomp melanoma alike, you can use this system to help you reassure your symptomp.',
      onClick: () => location.href = '/upload?user=person',
    },
  ];

  return (
    <Fragment>
      <div style={{marginBottom: 20}}>
        This a application can help you (as medical or non-medical person) to recognize your/your patient's melanoma symptomps.
      </div>
      <div>
        <Card.Group items={items} />
      </div>
    </Fragment>
  );
};

export default Home;