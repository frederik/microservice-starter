import { readFileSync } from 'fs';
import { join } from 'path';
import { create, Config } from 'swagger-express-mw';
import * as swaggerUi from 'swagger-ui-express';

export const initApi = (server) => {
  const swaggerDocument = require(join(process.cwd(), 'config/swagger.json'));
  const config = {
    appRoot: process.cwd(),
    controllers: {},
    options: {
      useStubs: true,
    },
    swaggerFile: join(process.cwd(), 'config/swagger.json'),
    swaggerSecurityHandlers: {
      // jwt_token: (req, authOrSecDef, scopes, callback) => {
      //   authenticateJwt(req, callback);
      // },
    }
  };

  create(config, function (err, swaggerExpress) {
    if (err) { throw err; }
    swaggerExpress.register(server);
  });

  server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

};

