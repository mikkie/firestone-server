import l from '../../common/logger';
import child_process from 'child_process';
import util from 'util'
import http from 'http'
import zlib from 'zlib'

class FireStoneRockService {

    constructor() {
        this.exec = util.promisify(child_process.exec)
        this.options = {
            'hostname': 'mncg.10jqka.com.cn',
            'port': 80,
            'path': '/cgiwt/delegate/qryChengjiao',
            'method': 'POST',
            'headers': {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Host': 'mncg.10jqka.com.cn',
                'Referer': 'http://mncg.10jqka.com.cn/cgiwt/index/index',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36'
            }
        };
    }

    async createNewFirerock(codes, tradeId) {
        let msg = `start the firestonerock service code=${codes}, tradeId=${tradeId}`;
        l.info(msg);
        if(process.env.ENABLE_FIREROCK === 'true'){
            let seconds = '*/4';
            if(codes[0] == 'N/A'){
                seconds = '3';
            }
            this.exec(`shell\\runfirerock ${tradeId} ${seconds}`);
            return new Promise((resolve, reject) => {
                resolve({ 'success': msg });
            });
        }
        else{
            return Promise.resolve({ 'success': msg, 'message' : 'FIREROCK is disable, ignore createNewFirerock'})
        }
    }

    async start_heart_beat(headers) {
        if (process.env.ENABLE_THS_HEART_BEAT === 'true') {
            Object.assign(this.options.headers, headers)
            return new Promise((resolve, reject) => {
                let req = http.request(this.options, (res) => {
                    res.on('data', (d) => {
                        zlib.gunzip(d, function (err, dezipped) {
                            if (err) {
                                l.error('failed to parse the heart beat result');
                            }
                            else {
                                let result = dezipped.toString();
                                l.info(`send heart beat to ths get response = ${result}`);
                                resolve(JSON.parse(result));
                            }
                        });
                    });
                })

                req.on('error', (e) => {
                    l.error(`send heart beat to ths error, e = ${e}`);
                    reject(e);
                });

                req.end();
            });
        }
        else {
            return Promise.resolve({ errorcode: 0, message: 'THS_HEART_BEAT is disable, ignore the heart beat' });
        }
    }

}

export default new FireStoneRockService()