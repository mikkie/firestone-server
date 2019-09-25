class UsersDatabase {
    constructor() {
      this._data = [];
  
      this.insert({
        username: 'aqua',
        password: '123456'
      });
      this.insert({
        username: 'tagar',
        password: '123456'
      });
    }
  
    byUser(user) {
      for(let i in this._data){
        if(this._data[i].username == user.username && this._data[i].password == user.password){
            return Promise.resolve(user);
        }
      }  
      return Promise.resolve(null);
    }

    insert(user) {
        const record = {
          username: user.username,
          password: user.password
        };
    
        this._data.push(record);
    
        return Promise.resolve(record);
    }
  
}
  
export default new UsersDatabase();
  