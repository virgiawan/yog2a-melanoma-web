import {createPlugin, createToken, assetUrl} from 'fusion-core';

export const DatabaseToken = createToken('DatabaseToken');

export default createPlugin({
  provides: () => {
    const DataStore = require('nedb-promise');

    return {
      questions: () => {
        const db = new DataStore({filename: './database/questions.db', autoload: true});
        return db;
      },
      scorings: () => {
        const db = new DataStore({filename: './database/scorings.db', autoload: true});
        return db;
      },
      rules: () => {
        const db = new DataStore({filename: './database/rules.db', autoload: true});
        return db;
      }
    };
  }
})