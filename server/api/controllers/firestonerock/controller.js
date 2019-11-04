import firestonerockService from '../../services/firestonerock.service'

export class FireStoneRockController{

    create(req, res){
        firestonerockService.createNewFirerock(req.body.codes, req.body.tradeId).then(r => {
            r ? res.json(r) : res.json({});
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to create new firerock'});
        });
    }

}

export default new FireStoneRockController()