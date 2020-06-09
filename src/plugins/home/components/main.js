import React, {useState, useEffect} from 'react';
import {Button, Card} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';
import isEmpty from 'lodash/isEmpty';

import toNumber from 'lodash/toNumber';
import isNumber from 'lodash/isNumber';
import isNan from 'lodash/isNaN';
import keys from 'lodash/keys';
import intersection from 'lodash/intersection';

const _ = {
  toNumber, isNumber, isNan,
  keys, intersection
}

const Home = () => {
  const questionType = {T: 'Tumor', N: "Lymph Nodes", M: "Metastases"};
  const [question, setQuestion] = useState({});
  const [counter, setCounter] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [stadium, setStadium] = useState(null);

  const getStadium = (answers) => {
    fetch('/api/getStadium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...answers})
    })
      .then(async res => await res.json())
      .then(res => setStadium(res))
  }

  const submitAnswer = ({questionId, answer}) => async () => {
    let response = await fetch('/api/submitAnswer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({questionId, answer: answer ? 'true' : 'false'})
    });
    response = await response.json();
    const nextNumberId = _.toNumber(response.nextNumberId);

    if (_.isNumber(nextNumberId) && !_.isNan(nextNumberId)) {
      setCounter(counter+1);
      setNextQuestion(nextNumberId);
    }
    else {
      const answerData = {...answers, [response.qtype]: response.nextNumberId};
      const keys = _.keys(answerData);
      const isStop = _.intersection(['T', 'N', 'M'], keys).length === 3;

      console.log('answerData', answerData);

      setAnswers(answerData);
      if (response.qtype === 'T' && !isStop) setNextQuestion(11); // get lymps question
      else if (response.qtype === 'N' && !isStop) setNextQuestion(15); // get metastases question
      else if (isStop) getStadium(answerData);
      setCounter(counter+1);
    }
  };

  useEffect(() => {
    fetch('/api/getQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({questionId: nextQuestion})
    })
      .then(async res => await res.json())
      .then(res => setQuestion(res))
  }, [nextQuestion]);

  return (
    <div>
      {!isEmpty(question) && <div>
        <Card fluid color='orange'>
          <Card.Content>
            <Card.Header>Questions {counter + 1}</Card.Header>
            <Card.Meta style={{fontStyle: 'italic'}}>related with {questionType[question.qtype]}</Card.Meta>
            <Card.Description>
              {question.question}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic onClick={submitAnswer({questionId: question._id, answer: true})} color='green'>Yes</Button>
              <Button basic onClick={submitAnswer({questionId: question._id, answer: false})} color='red'>No</Button>
            </div>
          </Card.Content>
        </Card>
      </div>}
      {isEmpty(question) && <div>Loading...</div>}
    </div>
  );
};

export default Home