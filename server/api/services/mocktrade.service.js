import l from '../../common/logger';
import models from '../models';
import Utils from '../common/Utils'
import mongoose from 'mongoose'

class MockTradeService {

    async queryMockTradesByUser(accessToken){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.MockTrade.findByUserId(userId);
    }


    async updateMockTrade(accessToken, mockTradeId, update){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.MockTrade.findOneAndUpdate({userId : mongoose.Types.ObjectId(userId), _id : mongoose.Types.ObjectId(mockTradeId)}, update, {new : true})
    }
}

export default new MockTradeService();