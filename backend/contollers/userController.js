const {
  userRegister,
  userLogin,
  userLogout,
  updateBalance,
} = require('../services/users');

class UserController {

  async register(req, res, next) {
    const { email, password } = req.body;
    const user = await userRegister({ email, password });
    res.status(201).json({ user: user });
  }

  async logIn(req, res, next) {
    const { email, password } = req.body;
    const user = await userLogin({ email, password });
    res.status(200).json(user);
  }

  async logOut(req, res, next) {
    const { _id, verificationToken } = req.user;
    await userLogout({ _id, verificationToken });
    res.status(204);
    res.end();
  }

  async updateBalance(req, res, next) {
    //
    res.status(200).json();
  }
}

module.exports = new UserController();
