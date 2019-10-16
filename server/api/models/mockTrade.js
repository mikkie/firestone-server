import mongoose from 'mongoose'
import l from '../../common/logger';

const mockTradeSchema = new mongoose.Schema({
    code : {
        type: String
    },
    state : {
        type: String,
        default: '停止'
    },
    result : {
        type: String,
        default: '无'
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
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    params : {
        type: Object
    }
});

mockTradeSchema.statics.findByUserId = async function (userId) {
    l.info(`find the mockTrade ${userId}`);
    let now = new Date();
    let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return this.find({
        userId: mongoose.Types.ObjectId(userId),
        createDate: {$gte: startOfToday},
        deleted: false
    });
}

const mockTrade = mongoose.model('MockTrade', mockTradeSchema);

export default mockTrade;