import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import schedule from 'node-schedule'
import child_process from 'child_process';
import util from 'util'

import swaggerify from './swagger';

import l from './logger';
import { connectDB } from '../api/models';

const app = new Express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    app.use(cors());
  }

  router(routes) {
    swaggerify(app, routes);

    return this;
  }


  startFirestone(){
    let exec = util.promisify(child_process.exec)
    exec('shell\\runfirestone');
    l.info('start the firestone service');
  }


  listen(port = process.env.PORT) {
    connectDB().then(async ()=> {
      const welcome = p => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);
      http.createServer(app).listen(port, welcome(port));
      schedule.scheduleJob('0 0 9 * * 1-5', () => {
        this.startFirestone();
      });
      if(new Date().getHours() >= 9){
        this.startFirestone();
      }
    });
    return app;
  }
}
