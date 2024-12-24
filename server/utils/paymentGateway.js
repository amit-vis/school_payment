const jwt = require('jsonwebtoken');
const axios = require('axios');

const PAYMENT_API = 'https://api.paymentgateway.com'; // Placeholder

exports.createPayment = async (transaction) => {
  const payload = {
    collect_id: transaction.collect_id,
    school_id: transaction.school_id,
    order_amount: transaction.order_amount,
    gateway: transaction.gateway,
  };

  const token = jwt.sign(payload, 'edvtest01');

  const response = await axios.post(`${PAYMENT_API}/create-collect-request`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.paymentLink;
};
