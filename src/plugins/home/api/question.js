import {createPlugin, createToken} from 'fusion-core';
import {DatabaseToken} from '../../core/database';

export const QuestionAPIToken = createToken('QuestionAPIToken');

export default createPlugin({
  deps: {db: DatabaseToken},
  provides: ({db}) => ({
    questions: db.questions(),
    rules: db.rules(),
  }),
  middleware: ({db}, {questions, rules}) => async (ctx, next) => {
    if (ctx.path === '/api/questions') {
      if (ctx.method === 'POST') {
        const data = [
          {
            "stadium": "0",
            "T": "Tis",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "1a",
            "T": "T1a",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "1b",
            "T": "T1b",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "1b",
            "T": "T2a",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "2a",
            "T": "T2b",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "2a",
            "T": "T3a",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "2b",
            "T": "T3b",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": "2b",
            "T": "T4a",
            "N": "N0",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1a",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1a",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1a",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1b",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1b",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T1b",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2a",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2a",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2a",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2b",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2b",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T2b",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3a",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3a",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3a",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3b",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3b",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T3b",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4a",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4a",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4a",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4b",
            "N": "N1",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4b",
            "N": "N2",
            "M": "M0"
          },
          {
            "stadium": 3,
            "T": "T4b",
            "N": "N3",
            "M": "M0"
          },
          {
            "stadium": 4,
            "T": "T1a",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T1a",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T1a",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T1b",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T1b",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T1b",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2a",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2a",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2a",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2b",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2b",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T2b",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3a",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3a",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3a",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3b",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3b",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T3b",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4a",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4a",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4a",
            "N": "N3",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4b",
            "N": "N1",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4b",
            "N": "N2",
            "M": "M1"
          },
          {
            "stadium": 4,
            "T": "T4b",
            "N": "N3",
            "M": "M1"
          }
        ];

        const newData = await rules.insert(data);

        console.log('newData', newData);

        ctx.response.status = 201;
        ctx.response.body = newData;
      }
    }

    return next();
  }
});