import mongoose from 'mongoose'
import l from '../../common/logger';

const configMockSchema = new mongoose.Schema({
    maxBuyNum: {
        type: Number
    },
    curBuyNum: {
        type: Number,
        default: 0
    },
    ths_url: {
        type: String
    },
    cookie: {
        type: String
    },
    username: {
        type: String
    },
    gdzh: {
        type: String
    },
    sh_gdzh: {
        type: String
    },
    monitor_concept: {
        type: Array
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

configMockSchema.statics.findByUserId = async function (userId) {
    l.info(`find the configMock ${userId}`);
    return this.findOne({
        userId: mongoose.Types.ObjectId(userId)
    });
}

const ConfigMock = mongoose.model('ConfigMock', configMockSchema);

export default ConfigMock;