const jwt = require('jsonwebtoken');
const User = require('../../models').user;

// const User = require('./middlewares/users/controller');

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    where: { username, password }
  }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, process.env.SECRET);
      return res.send({
        message: 'Success',
        username,
        status: user.status,
        token
      });
    } else {
      res.send({
        error: true,
        message: 'Wrong Email or Password!'
      });
    }
  });
};

exports.register = async (req, res) => {
  const body = req.body;
  const dataUser = {
    ...body
  };
  try {
    const createUser = await User.create(dataUser);
    const token = jwt.sign({ userId: createUser.id }, process.env.SECRET);
    res.send({
      data: createUser,
      message: 'User created',
      token
    });
  } catch (error) {
    res.send({
      message: 'error',
      error
    });
  }
};
