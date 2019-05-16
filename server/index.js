import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import connectMongoose from './mongoose-connector';
import routes from './routes';

import { PORT } from './config';

const start = () => {
  connectMongoose();
  const app = express();
  // logging
  app.use(logger('dev'));
  // parse body params and attach to req.body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // load routes on the /api path
  app.use('/api', routes);
  app.listen(PORT, () => console.log(`api listening on ${PORT}`));
};

start();
