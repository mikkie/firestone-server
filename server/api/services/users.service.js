import l from '../../common/logger';
// import db from './users.db.service';
import models from '../models'
import { model } from 'mongoose';

class UsersService {
    login(username, password) {
        l.info(`${this.constructor.name}.login(${username},${password})`);
        return models.User.findByLogin(username, password);
    }
}

export default new UsersService();