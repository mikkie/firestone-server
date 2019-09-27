import l from '../../common/logger';
import models from '../models'

class UsersService {
    login(username, password) {
        l.info(`${this.constructor.name}.login(${username},${password})`);
        return models.User.findByLogin(username, password);
    }
}

export default new UsersService();