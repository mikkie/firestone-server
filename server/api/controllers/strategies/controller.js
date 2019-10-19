import strategyService, { StrategyService } from '../../services/strategy.service'

export class StrategyController{

    getStrategies(req, res){
        strategyService.getStrategies().then(r => {
            if(r) res.json(r);
            else res.json([]);
        }, err => {
            res.json({"error" : err ? err.toString() : "failed to query strategies"});
        });
    }

    getStrategyById(req, res){
        strategyService.getStrategyById(req.params.strategyId).then(r => {
            if(r) res.json(r);
            else res.json({});
        }, err => {
            res.json({"error" : err ? err.toString() : `failed to query the strategy by Id ${req.params.strategyId}`});
        });
    }

}

export default new StrategyController()