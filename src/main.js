// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';

import Database, {DatabaseToken} from './plugins/core/database';

import QuestionAPI, {QuestionAPIToken} from './plugins/home/api/question';

import root from './root.js';

export default () => {
  const app = new App(root);
  if (__NODE__) {
    app.register(DatabaseToken, Database);
    app.middleware(require('koa-bodyparser')());
    app.register(QuestionAPIToken, QuestionAPI);
  }
  app.register(HelmetPlugin);
  app.register(Styletron);
  app.register(Router);
  return app;
};
