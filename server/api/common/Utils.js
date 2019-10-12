class Utils{
    
    static getUserIdFromAccessToken(accessToken){
        let buff = new Buffer(accessToken, 'base64');
        let text = buff.toString('utf-8');
        let id = text.split(':')[0];
        if(!/[a-z0-9]{24}/g.test(id)){
            return null;
        }
        return id;
    }

}

export default Utils