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

    async createMockTrade(accessToken, strategyId, params){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        let mockTrade = new models.MockTrade({
            code : params.code,
            userId : mongoose.Types.ObjectId(userId),
            strategyId : mongoose.Types.ObjectId(strategyId),
            params : params
        });
        return mockTrade.save();
    }
}

export default new MockTradeService();