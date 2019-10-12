import mongoose from 'mongoose'

import User from './user'
import ConfigMock from './configMock'
import MockTrade from './mockTrade'

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL);
};

const models = { User, ConfigMock, MockTrade };

export { connectDB };
export default models;
