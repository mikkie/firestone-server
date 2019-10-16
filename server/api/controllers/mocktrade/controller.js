import mockTradeService from '../../services/mocktrade.service'

export class MockTradeController{

    queryUserMockTrades(req, res){
        mockTradeService.queryMockTradesByUser(req.params.accesstoken).then(r => {
            r ? res.json(r) : res.json([]);
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to query mock trade'});
        });
    }

    updateMockTrade(req, res){
        mockTradeService.updateMockTrade(req.body.accesstoken, req.body.mocktradeid, req.body.update).then(r => {
            r ? res.json(r) : res.json({});
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to update mock trade'});
        });
    }

    createMockTrade(req, res){
        mockTradeService.createMockTrade(req.body.accesstoken, req.body.strategyId, req.body.params).then(r => {
            r ? res.json(r) : res.json({});
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to create mock trade'});
        });
    }
}

export default new MockTradeController()