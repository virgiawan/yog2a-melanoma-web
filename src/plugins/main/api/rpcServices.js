import {createPlugin, createToken} from 'fusion-core';
import {DatabaseToken} from '../../core/database';

export const RPCServiceToken = createToken('RPCServiceToken');

export default createPlugin({
  deps: {db: DatabaseToken},
  provides: ({db}) => ({
    questions: db.questions(),
    rules: db.rules(),
    scorings: db.scorings(),
  }),
  middleware: ({db}, {questions, rules, scorings}) => async (ctx, next) => {
    if (ctx.method === 'POST') {
      if (ctx.path === '/api/addScoring') {
        const result = await scorings.insert([
          // SCOER 1
          {type: 'person', question: 'Inflammation', score: 1},
          {type: 'person', question: 'Itch or altered sensation', score: 1},
          {type: 'person', question: 'Larger than other lesions (diameter more than 7 mm)', score: 1},
          {type: 'person', question: 'Oozing/crusting of lesion', score: 1},
          // SCORE 2
          {type: 'person', question: 'Change in size of lesion', score: 2},
          {type: 'person', question: 'Irregular pigmentation', score: 2},
          {type: 'person', question: 'Irregular border', score: 2},
        ]);

        console.log('RESULT', result);
        ctx.response.body = result;
        ctx.response.status = 201;
      }

      if (ctx.path === '/api/getQuestion') {
        const {questionId} = ctx.request.body;
        const result = await questions.findOne({number: questionId});

        ctx.response.body = result;
        ctx.response.status = 201;
      }
      else if (ctx.path === '/api/submitAnswer') {
        const {questionId, answer} = ctx.request.body;
        const current = await questions.findOne({_id: questionId});
        const nextNumberId = current.answers[answer];
        const qtype = current.qtype;

        ctx.response.body = {qtype, nextNumberId};
        ctx.response.status = 200;
      }
      else if (ctx.path === '/api/getStadium') {
        const answers = ctx.request.body;
        const stadium = await rules.findOne(answers);

        ctx.response.body = stadium;
        ctx.response.status = 200;
      }
    }

    return next();
  }
});