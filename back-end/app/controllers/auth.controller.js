const UserService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const user = await UserService.signup(req);
    return res.status(200).json({status: 200, data: user, message: "Created User Successfully!"});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.login = async (req, res) => {
  try {
    const user = await UserService.login(req);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({message: error.message});
  }
};

exports.logout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};

exports.updateProfile = async (req, res) =>{
  try {
    const user = await UserService.update(req);
    return res.status(200).json({status: 200, data: user, message: "Updated User Successfully!"});
  } catch (error) {
    return res.status(500).send({message: error.message});
  }
}