import l from '../../common/logger'
import Utils from '../common/Utils'
import models from '../models'
import mongoose from 'mongoose'
import schedule from 'node-schedule'
import firestonerockService from './firestonerock.service'

class ConfigMockService {

    constructor() {
        this.heartBeatTimerMap = {};
    }

    createHeartBeatTimerIfNeed(accessToken) {
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        if (this.heartBeatTimerMap[userId] == undefined) {
            this.heartBeatTimerMap[userId] = schedule.scheduleJob('0 */10 5-15 ? * 1-5', () => {
                models.ConfigMock.findByUserId(userId).then(r => {
                    if(r && r.cookie){
                        firestonerockService.start_heart_beat({cookie : r.cookie})
                    }else{
                        l.error(`not found mockconfig, userId = ${userId}, failed to run heart beat timer`)
                    }
                }, (err) => {
                    l.error(`failed to get mockconfig, userId = ${userId}, can not run heart beat timer, err = ${err}`);
                });
            });
        }
    }

    async getConfig(accessToken) {
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        return models.ConfigMock.findByUserId(userId);
    }

    async saveConfig(accessToken, update) {
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        l.info(`userId = ${userId}, update config = ${JSON.stringify(update)}`);
        return models.ConfigMock.findOneAndUpdate({ userId: mongoose.Types.ObjectId(userId) }, update, { new: true })
    }

    async clear() {
        return models.ConfigMock.updateMany({}, { $set: { curBuyNum: 0, monitor_concept : [] } })
    }

    async createConfig(accessToken, update) {
        let userId = Utils.getUserIdFromAccessToken(accessToken);
        if (!userId) {
            return Promise.reject("invalid accessToken");
        }
        let initConfig = {
            userId: mongoose.Types.ObjectId(userId),
            ths_url: 'http://mncg.10jqka.com.cn/cgiwt/index/index',
        }
        for (let k in update) {
            initConfig[k] = update[k];
        }
        let configMock = new models.ConfigMock(initConfig);
        l.info(`userId = ${userId} create config = ${configMock}`);
        return configMock.save();
    }
}

export default new ConfigMockService()