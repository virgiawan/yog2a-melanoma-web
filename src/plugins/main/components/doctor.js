import React, { useState, useEffect, Fragment } from 'react';
import {useService} from 'fusion-react';
import {FetcherToken} from '../api/fetcher';

import { Button, Card, Header } from 'semantic-ui-react';

import intersection from 'lodash/intersection';
import isEmpty from 'lodash/isEmpty';
import isNan from 'lodash/isNaN';
import isNumber from 'lodash/isNumber';
import keys from 'lodash/keys';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';

import Stadium0 from './stadium0';
import Stadium1And2 from './stadium1And2';
import Stadium3 from './stadium3';
import Stadium4 from './stadium4';
import Uncommon from './uncommon';

const _ = {
  toNumber, isNumber, isNan,
  keys, intersection, isEmpty,
  toString
}

const DoctorPage = (props) => {
  const questionType = {T: 'Tumor', N: "Lymph Nodes", M: "Metastases"};
  const [question, setQuestion] = useState({});
  const [counter, setCounter] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [stadium, setStadium] = useState(null);
  const treatments = [<Stadium0 />, <Stadium1And2 />, <Stadium1And2 />, <Stadium3 />, <Stadium4 />, <Uncommon />];

  const Fetcher = useService(FetcherToken);

  const getStadium = (finalAnswers) => {
    Fetcher.getStadium(finalAnswers, (res) => {
      setStadium(res);
      setNextQuestion(0);
      setQuestion({});
    }, alert);
  }

  const submitAnswer = ({questionId, answer}) => () => {
    Fetcher.submitAnswer({questionId, answer}, (response) => {
      const nextNumberId = _.toNumber(response.nextNumberId);

      if (_.isNumber(nextNumberId) && !_.isNan(nextNumberId)) {
        setCounter(counter+1);
        setNextQuestion(nextNumberId);
      }
      else {
        const answerData = {...answers, [response.qtype]: response.nextNumberId};
        const keys = _.keys(answerData);
        const isStop = _.intersection(['T', 'N', 'M'], keys).length === 3;
        setAnswers(answerData);

        if (response.qtype === 'T' && !isStop) setNextQuestion(11); // get lymps question
        else if (response.qtype === 'N' && !isStop) setNextQuestion(15); // get metastases question
        else if (isStop) getStadium(answerData);

        setCounter(counter+1);
      }
    }, alert)
  };

  useEffect(() => {
    if (nextQuestion > 0) {
      Fetcher.getQuestion({nextQuestion}, (res) =>  setQuestion(res), alert);
    }
  }, [nextQuestion]);

  return (
    <Fragment>
      <Header size='large' style={{marginBottom: 30}}>Doctor</Header>

      {!_.isEmpty(question) && _.isEmpty(stadium) &&
        <Card fluid color='orange'>
          <Card.Content>
            <Card.Header>Questions {counter + 1}</Card.Header>
            <Card.Meta style={{fontStyle: 'italic'}}>Question related with {questionType[question.qtype]}</Card.Meta>
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
        </Card>}

        {_.isEmpty(question) && !_.isEmpty(stadium) &&
        <Card fluid color='orange'>
          <Card.Content>
            {stadium.stadium != 5 ?
              <Card.Header>Stadium {stadium.stadium}</Card.Header> :
              <Card.Header>Uncommon Case</Card.Header>}
            <Card.Description>
            {stadium.stadium != 5 ?
              <p>The cancer already reached stadium: <strong>{stadium.stadium}</strong></p> :
              null}

              {treatments[
                _.isNumber(_.toNumber(stadium.stadium)) && !_.isNan(_.toNumber(stadium.stadium)) ?
                  stadium.stadium :
                  _.toNumber(_.toString(stadium.stadium).charAt(0))]}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic onClick={() => location.reload()} color='blue'>Recheck</Button>
              {/* <Button basic onClick={() => alert('Medicine')} color='green'>See Treatment</Button> */}
            </div>
          </Card.Content>
        </Card>}

      {_.isEmpty(question) && _.isEmpty(stadium) && <div>Loading...</div>}
    </Fragment>
  );
};

export default DoctorPage;