import mongoose from 'mongoose'

import User from './user'
import ConfigMock from './configMock'
import MockTrade from './mockTrade'
import Strategy from './strategy'

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL);
};

const models = { User, ConfigMock, MockTrade, Strategy };

export { connectDB };
export default models;
