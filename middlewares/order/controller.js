const models = require('../../models');

const { Op } = require('sequelize');
const User = models.user;
const Train = models.kereta;
const Typetrain = models.typekereta;
const OrderTicket = models.order;
const Payment = models.payment;
exports.insert = async (req, res) => {
  // console.log(req.body);
  try {
    console.log(req.user.userId);
    const { trainId, qty } = req.body;
    // let findTrain = {};
    const findTrain = await Train.findOne({
      where: { id: trainId }
    });

    const createPayment = await Payment.create({
      // price: findTrain.price,
      qty,
      totalPrice: findTrain.price * qty,
      status: 'pending'
    });
    // console.log(createPayment);
    // res.send({
    //   findTrain
    // });

    const createOrder = await OrderTicket.create({
      id_user: req.user.userId,
      id_tiket: findTrain.id,
      id_payment: createPayment.id
      // price: findTrain.price,
      // qty,
      // totalPrice: findTrain.price * qty,
      // status: 'pending'
    });
    if (createOrder) {
      const findOrder = await OrderTicket.findOne({
        where: { id: createOrder.id }
      });
      const data = await toDisplay(findOrder.id);
      res.status(200).send({
        message: 'success full inputted',
        status: 200,
        data
      });
    } else {
      res.status(400).send({
        message: 'data is not entered to repeat',
        status: 400
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//displaying data
const toDisplay = orderId => {
  return new Promise((resolve, reject) => {
    const data = OrderTicket.findOne({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password', 'status']
          }
        },
        {
          model: Train,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'qty', 'price']
          },
          include: [
            {
              model: Typetrain,
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }
          ]
        }
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id_tiket', 'id_user']
      },
      where: { id: orderId }
    });
    if (data) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};
