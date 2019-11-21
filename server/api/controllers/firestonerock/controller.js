import firestonerockService from '../../services/firestonerock.service'
import configmockService from '../../services/configmock.service'

export class FireStoneRockController {

    create(req, res) {
        firestonerockService.createNewFirerock(req.body.codes, req.body.tradeId).then(r => {
            r ? res.json(r) : res.json({});
        }, err => {
            res.json({ "error": err ? err.toString() : 'failed to create new firerock' });
        });
    }

    ping_heart_beat(req, res){
        firestonerockService.start_heart_beat({'Cookie' : req.body.cookie}).then(data => {
            data ? res.json(data) : res.json({});
        }, err => {
            res.json({ "error": err ? err.toString() : 'failed to send test heart beat' });
        });
    }

    //only use for test
    heart_beat(req, res) {
        configmockService.getConfig(req.params.accesstoken).then(r => {
            if (r) {
                firestonerockService.start_heart_beat({'Cookie' : r.cookie}).then(data => {
                    data ? res.json(data) : res.json({});
                }, err => {
                    res.json({ "error": err ? err.toString() : 'failed to send heart beat' });
                });
            }
            else {
                res.json({ error: 'no config found, can not run heart beat' });
            }
        }, (err) => {
            res.json({ error: err ? err.toString() : 'get config failed, can not run heart beat' });
        });
    }

}

export default new FireStoneRockController()