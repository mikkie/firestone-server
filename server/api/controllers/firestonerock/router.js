import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/heartbeat/:accesstoken', controller.heart_beat)
  .post('/pingheartbeat', controller.ping_heart_beat)