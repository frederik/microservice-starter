import { info } from 'winston';
import { Injectable } from 'injection-js';

@Injectable()
export class PrintService {

  id = Math.random().toString(36).substr(2, 8);

  constructor() {
    info('Started PrintService');
  }

  info() {
    info(this.id);
  }
}
