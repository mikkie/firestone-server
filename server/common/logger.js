import pino from 'pino';
import child_process from 'child_process'
import stream from 'stream'

const logThrough = new stream.PassThrough();

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
}, logThrough);

const cwd = process.cwd();
const {env} = process;
const logPath = `${cwd}/logs`;

const child = child_process.spawn(process.execPath, [
  require.resolve('pino-tee'),
  'info', `${logPath}/info.log`,
  'warn', `${logPath}/warn.log`,
  'error', `${logPath}/error.log`,
  'fatal', `${logPath}/fatal.log`
], {cwd, env});

child.unref();

logThrough.pipe(child.stdin);
logThrough.pipe(process.stdout);

export default l;
