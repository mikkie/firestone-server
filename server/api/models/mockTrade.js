import mongoose from 'mongoose'
import l from '../../common/logger';

const mockTradeSchema = new mongoose.Schema({
    code : {
        type: String
    },
    state : {
        type: String
    },
    result : {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    strategyId: {
        type: mongoose.Schema.Types.ObjectId
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

mockTradeSchema.statics.findByUserId = async function (userId) {
    l.info(`find the mockTrade ${userId}`);
    return this.find({
        userId: mongoose.Types.ObjectId(userId),
        deleted: false
    });
}

const mockTrade = mongoose.model('MockTrade', mockTradeSchema);

export default mockTrade;