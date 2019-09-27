import mongoose from 'mongoose'

import User from './user'
import l from '../../common/logger';

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL);
};

const models = { User };

export { connectDB };
export default models;
