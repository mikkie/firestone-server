import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.updateMockTrade)
  .post('/new', controller.createMockTrade)
  .get('/:accesstoken', controller.queryUserMockTrades)
  .post('/history', controller.queryHistoryMockTrades)