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
        return models.ConfigMock.findOneAndUpdate({userId : mongoose.Types.ObjectId(userId)}, update, {new : true})
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
        l.info('save the mockcongig ' + JSON.stringify(initConfig));
        return configMock.save();
    }
}

export default new ConfigMockService()