import UsersService from '../../services/users.service';

export class Controller {
    login(req, res) {
        UsersService
          .login(req.body.username, req.body.password)
          .then(r => {
            if (r) res.json(r);
            else res.json({"error" : "login failed"});
          });
      }
    auth(req, res){
       UsersService.auth(req.headers.accesstoken).then(r => {
          if(r) res.json(r);
          else res.json({"error" : "auth failed"});
       });
    }  

}
export default new Controller();