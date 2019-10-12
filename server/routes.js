import examplesRouter from './api/controllers/examples/router';
import usersRouter from './api/controllers/users/router'
import configmockRouter from './api/controllers/configmocks/router'
import mockTradeRouter from './api/controllers/mocktrade/router'

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/configmock', configmockRouter);
  app.use('/api/v1/mocktrade', mockTradeRouter);
}
