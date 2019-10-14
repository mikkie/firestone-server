import controller from './controller'
import * as express from 'express';

export default express
  .Router()
  .get('/', controller.getStrategies)
  .get('/:strategyId', controller.getStrategyById)
