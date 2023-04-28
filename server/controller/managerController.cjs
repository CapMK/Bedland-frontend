// eslint-disable-next-line @typescript-eslint/no-var-requires
const Model = require('../../db.json');

exports.login = async (req, res) => {
  const Manager = Model.manager;
  const user = await Manager.filter((person) => person.login === req.body.login);
  if (user.length === 0)
    return res.status(400).send({ message: 'The login/password you entered does not exist' });

  if (user[0].password !== req.body.password)
    return res.status(400).send({ message: 'The login/password you entered is incorrect' });
  return res.send({
    status: 200,
    data: {
      message: 'You are logged in!',
    },
    token: 'Bearer token',
    id: user[0].id,
    login: user[0].login,
    role: user[0].role,
  });
};

exports.logout = async (_req, res) =>
  res.send({
    status: 200,
    data: {
      message: "You've been logged out!",
    },
  });
