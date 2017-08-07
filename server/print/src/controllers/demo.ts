import { info } from 'winston';
import { injector, PrintService, PingService } from '../services/index';

const printService = injector.get(PrintService);
const pingService = injector.get(PingService);

const demo = (req, res) => {
  info('Demo');
  pingService.info();
  printService.info();
  res.status(200).send('Demo');
};

export {
  demo
};
