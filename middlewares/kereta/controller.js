const Kereta = require('../../models').kereta;
const typekereta = require('../../models').typekereta;

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

exports.getTicket = async (req, res) => {
  try {
    const tiket = await Kereta.findAll({
      // attributes: { exclude: ['createdAt, updatedAt'] }[
      // ('id',
      // 'name_train',
      // 'id_type',
      // 'dateStart',
      // 'startStation',
      // 'startTime',
      // 'destinationStation',
      // 'arrivalTime',
      // 'price',
      // 'qty')
      // ],
      include: { model: typekereta, attributes: ['name'] }
    });
    // console.log(tiket);
    if (tiket) {
      res.status(200).send({
        status: 200,
        message: 'success',
        tiket
      });
    } else {
      res.status(400).send({
        status: 400,
        status,
        message: 'no data'
      });
    }
  } catch (error) {
    console.log(error);
  }
};
