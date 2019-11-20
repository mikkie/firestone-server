import l from '../../common/logger';
import models from '../models';
import Utils from '../common/Utils'
import mongoose from 'mongoose'

class MockTradeService {

    async queryMockTradesByUser(accessToken){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.MockTrade.findByUserId(userId);
    }


    async queryHistoryMockTrades(accessToken, createdDate, code){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.MockTrade.findByUserIdAndDateAndCode(userId, createdDate, code);
    }


    async updateMockTrade(accessToken, mockTradeId, update){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        l.info(`userId = ${userId}, update mockTradeId = ${mockTradeId} with update = ${JSON.stringify(update)}`);
        return models.MockTrade.findOneAndUpdate({userId : mongoose.Types.ObjectId(userId), _id : mongoose.Types.ObjectId(mockTradeId)}, update, {new : true})
    }

    async createMockTrade(accessToken, strategyId, params){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        let mockTrade = new models.MockTrade({
            code : params.code,
            userId : mongoose.Types.ObjectId(userId),
            strategyId : mongoose.Types.ObjectId(strategyId),
            createDate : Date.now(),
            params : params
        });
        l.info(`userId = ${userId} create mock trade = ${mockTrade}`);
        return mockTrade.save();
    }
}

export default new MockTradeService();