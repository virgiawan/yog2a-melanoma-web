import {createPlugin, createToken} from 'fusion-core';
import fetch from 'isomorphic-fetch';
import asyncBusboy from 'async-busboy';

import get from 'lodash/get';
import concat from 'lodash/concat';

import {DatabaseToken} from '../../core/database';


const modelUrl = "https://asia-northeast1-absolute-broker-279214.cloudfunctions.net/melanoma-function";
const searchUrl = "https://www.googleapis.com/customsearch/v1?q=melanoma&cx=018422723380461371270:7dicrbkccji&key=AIzaSyCRNFsJki4IhAaZWLfAtVc9Pww6gT_Qif8";

const FormData = require('form-data');
let getBuffer;
if (__NODE__) {
  getBuffer = require('get-buffer');
}

export const RPCServiceToken = createToken('RPCServiceToken');

const _ = { concat, get };

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default createPlugin({
  deps: {db: DatabaseToken},
  provides: ({db}) => ({
    questions: db.questions(),
    rules: db.rules(),
    scorings: db.scorings(),
  }),
  middleware: ({db}, {questions, rules, scorings}) => async (ctx, next) => {
    if (ctx.method === 'POST') {
      if (ctx.path === '/api/getScorings') {
        const {score} = ctx.request.body;
        const result = await scorings.find({score});

        ctx.response.body = result;
        ctx.response.status = 200;
      }
      else if (ctx.path === '/api/getQuestion') {
        const {questionId} = ctx.request.body;
        const result = await questions.findOne({number: questionId});

        ctx.response.body = result;
        ctx.response.status = 200;
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
      else if (ctx.path === '/api/uploadImage') {
        const {files = []} = await asyncBusboy(ctx.req);

        if (files[0] && getBuffer) {
          const buffer = await getBuffer.fromStream(files[0]);
          const filename = files[0]['filename'];
          const mimeType = files[0]['mimeType'];

          const data = new FormData();
          data.append(filename, buffer, {
            contentType: mimeType,
            name: filename,
            filename,
          });

          const res = await fetch(modelUrl, {method: 'POST', body: data});
          const {predicted_class: predicted, predicted_probability: probability} = await res.json();

          ctx.response.body = {result: {predicted: predicted[0], probability: probability[0]}};
          ctx.response.status = 200;
        }
        else{
          ctx.response.body = {result: {message: 'error'}};
          ctx.response.status = 400;
        }
      }
      else if (ctx.path === '/api/getNews') {
        const {startIndex} = ctx.request.body;

        const resDetik = await fetch(`${searchUrl}&siteSearch=health.detik.com${startIndex ? '&start='+startIndex : ''}`);
        const resJsonDetik = await resDetik.json();

        const resPubMed = await fetch(`${searchUrl}&siteSearch=pubmed.ncbi.nlm.nih.gov${startIndex ? '&start='+startIndex : ''}`);
        const resJsonPubMed = await resPubMed.json();

        let items = _.concat(_.get(resJsonDetik, 'items', []) || [], _.get(resJsonPubMed, 'items', []) || []);
        items = shuffle(items);

        ctx.response.body = {result: items};
        ctx.response.status = 200;
      }
    }

    return next();
  }
});