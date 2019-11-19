import l from '../../common/logger'
import Utils from '../common/Utils'
import models from '../models'
import mongoose from 'mongoose'

class ConfigMockService {

    async getConfig(accessToken){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.ConfigMock.findByUserId(userId);
    }

    async saveConfig(accessToken, update){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        l.info(`userId = ${userId}, update config = ${JSON.stringify(update)}`);
        return models.ConfigMock.findOneAndUpdate({userId : mongoose.Types.ObjectId(userId)}, update, {new : true})
    }

    async clearCurBuyNum(){
        l.info('reset all mock config curBuyNum to 0');
        return models.ConfigMock.updateMany({}, {$set: {curBuyNum: 0}})
    }

    async createConfig(accessToken, update){
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        if(!userId){
          return Promise.reject("invalid accessToken");
        }
        let initConfig = {
            userId : mongoose.Types.ObjectId(userId),
            ths_url : 'http://mncg.10jqka.com.cn/cgiwt/index/index',
        }
        for(let k in update){
            initConfig[k] = update[k];
        }
        let configMock = new models.ConfigMock(initConfig);
        l.info(`userId = ${userId} create config = ${configMock}`);
        return configMock.save();
    }
}

export default new ConfigMockService()