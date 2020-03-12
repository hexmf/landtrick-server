const Kereta = require('../../models').kereta;

exports.addTicket = async (req, res) => {
  const body = req.body;
  const dataTicket = {
    ...body
  };
  try {
    const createTicket = await Kereta.create(dataTicket);
    // const token = jwt.sign({ userId: createUser.id }, process.env.SECRET);
    res.send({
      data: createTicket,
      message: 'Tiket created'
    });
  } catch (error) {
    res.send({
      message: 'error',
      error
    });
  }
};
