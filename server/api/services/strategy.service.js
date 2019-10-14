import l from '../../common/logger';
import models from '../models';
import mongoose from 'mongoose'

export class StrategyService{

    async getStrategies(){
        return models.Strategy.find();
    }  
    
    async getStrategyById(strategyId){
        return models.Strategy.findById(mongoose.Types.ObjectId(strategyId));
    }
}

export default new StrategyService();