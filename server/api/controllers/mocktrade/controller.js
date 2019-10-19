import mockTradeService from '../../services/mocktrade.service'

export class MockTradeController{

    queryUserMockTrades(req, res){
        mockTradeService.queryMockTradesByUser(req.params.accesstoken).then(r => {
            r ? res.json(r) : res.json([]);
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to query mock trades'});
        });
    }

    queryHistoryMockTrades(req, res){
        mockTradeService.queryHistoryMockTrades(req.body.accesstoken, req.body.createdDate, req.body.code).then(r => {
            r ? res.json(r) : res.json([]);
        }, err => {
            res.json({"error" : err ? err.toString() : 'failed to query history mock trades'});
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