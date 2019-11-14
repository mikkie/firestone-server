import l from '../../common/logger';
import child_process from 'child_process';
import util from 'util'

class FireStoneRockService{

    constructor(){
        this.exec = util.promisify(child_process.exec)
    }

    async createNewFirerock(codes, tradeId){
        let msg = `start the firestonerock service code=${codes}, tradeId=${tradeId}`;
        l.info(msg);
        this.exec(`shell\\runfirerock ${tradeId}`);
        return new Promise((resolve, reject) => {
            resolve({'success' : msg});
        });
    }

}

export default new FireStoneRockService()