import l from '../../common/logger';
import db from './users.db.service';

class UsersService {
    login(username, password) {
        l.info(`${this.constructor.name}.login(${username},${password})`);
        return db.byUser({username: username, password: password});
    }
}

export default new UsersService();