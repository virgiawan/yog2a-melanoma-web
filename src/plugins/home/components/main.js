import React from 'react';
import {Button} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';

const Home = () => {

  const handleOnClick = async () => {
    const data = await fetch('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('data', data);
  };

  return (
    <div>
      <Button onClick={handleOnClick}>Click Here</Button>
    </div>
  );
};

export default Home