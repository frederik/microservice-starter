import { info } from 'winston';

import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';

import { join } from 'path';

import * as request from 'request';

import { initApi } from '../../../shared/src/api';

const server = express();

// enable cors
server.use(cors());

// setup basic security recommendations
server.use(helmet());

// parse application/json
server.use(bodyParser.json());

// initialize swagger api
initApi(server);

// add static assets
server.use('/', express.static(join(process.cwd(), 'www')));

server.use('/demo', (req, res) => {
  // you can use a proxy like Traefik instead
  request.get('http://print:8000/api/publish/demo').pipe(res);
});

server.listen(process.env.PORT || 80, () => {
  info('Server is up and running');
});
