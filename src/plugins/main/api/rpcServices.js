import {createPlugin, createToken} from 'fusion-core';
import {DatabaseToken} from '../../core/database';

export const RPCServiceToken = createToken('RPCServiceToken');

export default createPlugin({
  deps: {db: DatabaseToken},
  provides: ({db}) => ({
    questions: db.questions(),
    rules: db.rules(),
  }),
  middleware: ({db}, {questions, rules}) => async (ctx, next) => {
    if (ctx.method === 'POST') {
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