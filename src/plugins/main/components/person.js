import React, {Fragment, useEffect, useState} from 'react';
import fetch from 'isomorphic-fetch';
import {useService} from 'fusion-react';

import { Button, Card, Header } from 'semantic-ui-react';


const Person = () => {

  const onClickBtn = () => {
    fetch('/api/addScoring', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async res => await res.json())
      .then(res => console.log('RES', res))
      .catch(alert);
  };

  return (
    <Fragment>
      <Button onClick={onClickBtn}>Clik me!</Button>
    </Fragment>
  );
}

export default Person;