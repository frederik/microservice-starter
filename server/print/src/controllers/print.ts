import { info } from 'winston';
import { injector, PrintService } from '../services/index';

const printService = injector.get(PrintService);

const html = (req, res) => {
  info('HTML');
  printService.info();
  res.status(200).send();
};

const pdf = (req, res) => {
  info('PDF');
  printService.info();
  res.status(200).send();
};

export {
  pdf,
  html
};
