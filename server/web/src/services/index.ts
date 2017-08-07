import 'reflect-metadata';

import { ReflectiveInjector } from 'injection-js';
import { PingService } from '../../../../shared/src/services/ping';

const injector = ReflectiveInjector.resolveAndCreate([
  PingService
]);

export {
  injector,
  PingService
};
