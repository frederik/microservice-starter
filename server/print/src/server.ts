import { info } from 'winston';

import * as express from 'express';
import * as cors from 'cors';

import { initApi } from '../../../shared/src/api';

const server = express();
server.use(cors());
initApi(server);

server.listen(process.env.PORT || 8000, () => {
  info('Server is up and running');
});
