import {createPlugin, createToken} from 'fusion-core';
import {DatabaseToken} from '../../core/database';

export const QuestionAPIToken = createToken('QuestionAPIToken');

export default createPlugin({
  deps: {db: DatabaseToken},
  provides: ({db}) => ({
    questions: db.questions(),
  }),
  middleware: ({db}, {questions}) => async (ctx, next) => {
    if (ctx.path === '/api/questions') {
      if (ctx.method === 'POST') {
        const rules = [];
        rules.push(
          {number: 1, code: 'Tis', question: 'Is the tumor in situ ?', answers: {true: 'Tis', false: '2'}, type: 'doctor'},
          {number: 2, code: 'T1', question: 'Is the tumor thickness less than equeal 1.0 mm ?', answers: {true: '3', false: '5'}, type: 'doctor'},
          {number: 3, code: 'T1a', question: 'Is the tumor tickness less than 0.8 mm and without ulceration ?', answers: {true: 'T1a', false: 'T1b'}, type: 'doctor'},
          {number: 5, code: 'T2', question: 'Is the tumor thickness between 1.0 mm and 2.0 mm ?', answers: {true: '6', false: '7'}, type: 'doctor'},
          {number: 6, code: '', question: 'Is there any ulceration ?', answers: {true: 'T2b', false: 'T2a'}, type: 'doctor'},
          {number: 7, code: 'T3', question: 'Is the tumor thickness between 2.0 mm and 4.0 mm ?', answers: {true: '9', false: '8'}, type: 'doctor'},
          {number: 8, code: '', question: 'Is there any ulceration ?', answers: {true: 'T3b', false: 'T3a'}, type: 'doctor'},
          {number: 9, code: 'T4', question: 'Is the tumor thickness more than 4.0 ?', answers: {true: '10', false: '10'}, type: 'doctor'},
          {number: 10, code: '', question: 'Is there any ulceration ?', answers: {true: 'T4b', false: 'T4a'}, type: 'doctor'},

          {number: 11, code: 'N0', question: 'Is there any regional lymph nodes metastases detected ?', answers: {true: '12', false: 'N0'}, type: 'doctor'},
          {number: 12, code: 'N1', question: 'Is there one tumor involved nodes ?', answers: {true: 'N1', false: '13'}, type: 'doctor'},
          {number: 13, code: 'N2', question: 'Are there 2 or 3 tumors involved nodes ?', answers: {true: 'N2', false: 'N3'}, type: 'doctor'},

          {number: 15, code: 'M0', question: 'Is there evidence of distance metastases ?', answers: {true: 'M1', false: 'M0'}, type: 'doctor'}
        )
        
        
        const newData = await questions.insert(rules);
        console.log('newData', newData);
        ctx.response.status = 201;
        ctx.response.body = newData;
      }
    }

    return next();
  }
});