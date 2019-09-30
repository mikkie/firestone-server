import l from '../../common/logger';
import models from '../models';
import crypto from 'crypto';

class UsersService {
    login(username, password) {
        password = crypto.createHash('md5').update(password).digest("hex");
        l.info(`${this.constructor.name}.login(${username},${password})`);
        return new Promise((resolve, reject) => {
            models.User.findByLogin(username, password).then(r => {
                if (r) {
                    return this.generateAccessToken().then(res => {
                        l.info(`user ${username}, login success: id = ${r._id}, access_token = ${res}`);
                        r.access_token = res;
                        r.expired_date = new Date(Date.now() + 24 * 3600 * 1000);
                        r.save().then(()=>{
                            resolve({
                                id: r._id,
                                access_token: res,
                                expired_date: r.expired_date
                            });
                        });
                    });
                }
                else {
                    l.warn(`user ${username} login failed`);
                    resolve(null);
                }
            });
        });
    }

    async generateAccessToken(){
        return new Promise((resolve, reject)=>{
            crypto.randomBytes(32, (err, buffer) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(buffer.toString('hex'));
                }
            })
        })
    }
}

export default new UsersService();