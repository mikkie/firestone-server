import configMockService from '../../services/configmock.service'

export class ConfigMockController{

    getConfig(req, res) {
        configMockService.getConfig(req.params.accesstoken).then(r => {
            if(r) res.json(r);
            else res.json({});
        }, (err) => {
            res.json({error : err ? err.toString(): 'get config failed'});
        });
    }

    saveConfig(req, res) {
        configMockService.saveConfig(req.body.accesstoken, req.body.update).then(r => {
            if(r){
                configMockService.createHeartBeatTimerIfNeed(req.body.accesstoken);
                res.json(r);
            }
            else{
                configMockService.createConfig(req.body.accesstoken, req.body.update).then(config => {
                    if(config) {
                        configMockService.createHeartBeatTimerIfNeed(req.body.accesstoken);
                        res.json(config);
                    }
                    else res.json({});
                }, (err) => {
                    res.json({error : err ? err.toString() : 'create config failed'});
                });
            }   
        }, (err) => {
            res.json({error : err ? err.toString() : 'update config failed'});
        });
    }

}

export default new ConfigMockController()