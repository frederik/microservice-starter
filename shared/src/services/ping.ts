import 'reflect-metadata';

import { info } from 'winston';
import { Injectable } from 'injection-js';

@Injectable()
export class PingService {

  id = Math.random().toString(36).substr(2, 8);

  constructor() {
    info('Started PingService');
  }

  info() {
    info(this.id);
  }
}
