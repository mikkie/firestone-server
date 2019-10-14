import mongoose from 'mongoose'
import l from '../../common/logger'

const strategySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    op: {
        type: String
    },
    parameters: {
        type: Object
    }
});

const strategy = mongoose.model('Strategy', strategySchema);

export default strategy;