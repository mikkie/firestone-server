import l from '../../common/logger';
import models from '../models';
import crypto from 'crypto';

class UsersService {
    login(username, password) {
        password = crypto.createHash('md5').update(password).digest("hex");
        l.info(`${this.constructor.name}.login(${username},${password})`);
        return models.User.findByLogin(username, password);
    }
}

export default new UsersService();