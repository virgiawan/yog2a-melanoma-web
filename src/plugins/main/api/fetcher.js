import {createPlugin, createToken} from 'fusion-core';
import fetch from 'isomorphic-fetch';
import { call } from 'ramda';

export const FetcherToken = createToken('FetcherToken');

export default createPlugin({
  provides: () => {
    return {

      getQuestion: ({nextQuestion}, callback, callbackErr) => {
        fetch('/api/getQuestion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({questionId: nextQuestion})
        })
          .then(async res => await res.json())
          .then(callback)
          .catch(callbackErr);
      },

      submitAnswer: ({questionId, answer}, callback, callbackErr) => {
        fetch('/api/submitAnswer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({questionId, answer: answer ? 'true' : 'false'})
        })
          .then(async res => await res.json())
          .then(callback)
          .catch(callbackErr);
      },

      getStadium: ({T, M, N}, callback, callbackErr) => {
        fetch('/api/getStadium', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({T, M, N})
        })
          .then(async res => await res.json())
          .then(callback)
          .catch(callbackErr);
      }

    };
  }
})