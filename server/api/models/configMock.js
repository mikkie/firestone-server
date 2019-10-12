import mongoose from 'mongoose'
import l from '../../common/logger';

const configMockSchema = new mongoose.Schema({
    maxBuyNum: {
        type: Number
    },
    ths_url: {
        type: String
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