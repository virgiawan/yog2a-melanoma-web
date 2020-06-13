import React, {Fragment, useEffect, useState} from 'react';
import {useService} from 'fusion-react';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import set from 'lodash/set';
import get from 'lodash/get';
import values from 'lodash/values';
import filter from 'lodash/filter';
import isNull from 'lodash/isNull';
import some from 'lodash/some';

import { Button, Card, Header, Checkbox } from 'semantic-ui-react';

import {FetcherToken} from '../api/fetcher';

const _ = {
  map, isEmpty, reduce, some,
  set, get, values, isNull, filter
};

const Person = (props, state) => {
  const [scorings, setScorings] = useState([]);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [nextScorings, setNextScorings] = useState(1);
  const [totalScores, setTotalScores] = useState(null);

  const Fetcher = useService(FetcherToken);

  useEffect(() => {
    if (nextScorings > 0) {
      Fetcher.getScorings({nextScorings}, (res = []) => {
        const container = _.reduce(res, (acc, r) => _.set(acc, r._id, null), {});
        answers[counter] = container;
        setAnswers(answers);
        setScorings(res);
      }, alert);
    }
  }, [nextScorings]);

  useEffect(() => {

  }, [answers]);

  const createCheckBoxAction = ({index, id}) => ({
    onChange: value => {
      setAnswers(prevAnswers => {
        prevAnswers[index][id] = value;
        return [...prevAnswers];
      });
    },
    getValue: () => _.get(answers, `${index}.${id}`, null),
  })

  const onSubmit = () => {
    const isValid = !(_.some(_.values(answers[counter]), _.isNull));
    if (isValid) {
      if (nextScorings < 2) {
        setNextScorings(nextScorings + 1);
        setCounter(counter + 1);
      }
      else {
        const result = _.reduce(answers, (acc, as) => {
          const {weight, scores} = acc;
          return {
            scores: scores + (_.filter(_.values(as), a => a === 'Yes').length * (weight + 1)),
            weight: weight + 1,
          };
        }, {scores: 0, weight: 0});

        setTotalScores(_.get(result, 'scores', null));
        setNextScorings(0);
        setScorings([]);
      }
    }
    else {
      alert('You must answer all questions...');
    }
  }

  return (
    <Fragment>
      <Header size='large' style={{marginBottom: 30}}>Non medical person</Header>

      {!_.isEmpty(scorings) && _.isNull(totalScores) &&
        <Card fluid color='orange'>
          <Card.Content>
            <Card.Header>Please answer all questions:</Card.Header>
            <Card.Description>
              {_.map(scorings, (s, i) => {
                const action = createCheckBoxAction({index: counter, id: s._id});

                return (
                  <div key={i} style={{marginBottom: 10}}>
                    <p>{s.question}: </p>

                    <Checkbox
                      label="Yes"
                      checked={action.getValue() === 'Yes'}
                      onChange={(e, {checked}) => {
                        if (checked) action.onChange('Yes');
                        else action.onChange(null);
                      }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Checkbox
                      label="No"
                      checked={action.getValue() === 'No'}
                      onChange={(e, {checked}) => {
                        if (checked) action.onChange('No');
                        else action.onChange(null);
                      }}
                    />
                  </div>
                );
              })}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic onClick={onSubmit} color='green'>Submit</Button>
            </div>
          </Card.Content>
        </Card>
      }

      {_.isEmpty(scorings) && !_.isNull(totalScores) &&
        <Card fluid color='orange'>
          <Card.Content>
            <Card.Header>Conclusion:</Card.Header>
            <Card.Description>
              {totalScores >= 3 ?
                <div>
                  <p style={{color: 'orange', fontWeight: 'bolder'}}>There is possibility of melanoma.</p>
                  <p>Please discuss about your condition with your doctor.</p>
                </div> :
                <div>
                  <p style={{color: 'green', fontWeight: 'bolder'}}>It's okay.</p>
                  <p>You haven't needed discussing about your condition with your doctor yet. Please observe your condition regularly.</p>
                </div>}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic onClick={() => location.href = '/'} color='blue'>Want to check again ?</Button>
              <Button basic onClick={() => location.href = '/info'} color='green'>More about melanoma</Button>
            </div>
          </Card.Content>
        </Card>
      }

      {_.isEmpty(scorings) && _.isNull(totalScores) && <div>Loading...</div>}
    </Fragment>
  );
}

export default Person;