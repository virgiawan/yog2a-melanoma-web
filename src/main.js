// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';

import Database, {DatabaseToken} from './plugins/core/database';

import RPCServices, {RPCServiceToken} from './plugins/main/api/rpcServices';
import FetcherServices, {FetcherToken} from './plugins/main/api/fetcher';

import root from './root.js';

export default () => {
  const app = new App(root);
  if (__NODE__) {
    app.register(DatabaseToken, Database);
    app.middleware(require('koa-bodyparser')());
    app.register(RPCServiceToken, RPCServices);
  }

  app.register(FetcherToken, FetcherServices);

  app.register(HelmetPlugin);
  app.register(Styletron);
  app.register(Router);
  return app;
};
