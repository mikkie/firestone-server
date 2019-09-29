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
}
export default new Controller();