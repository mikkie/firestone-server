import UsersService from '../../services/users.service';

export class Controller {
    login(req, res) {
        UsersService
          .login(req.body.username, req.body.password)
          .then(r => {
            if (r) res.json(r);
            else res.status(404).end();
          });
      }
}
export default new Controller();