import 'reflect-metadata';

import { PrintService } from './print';
import { ReflectiveInjector } from 'injection-js';
import { PingService } from '../../../../shared/src/services/ping';

const injector = ReflectiveInjector.resolveAndCreate([
  PrintService,
  PingService
]);

export {
  injector,
  PrintService,
  PingService
};
