const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response
    .status(200)
    .send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
  const id = request.params.id;
  if (!isNaN(id)) {
    response
      .status(200)
      .send(`Payment methods for cart ${id}`);
  } else {
    response
      .status(404)
      .send();
  }
});

app.get('/available_payments', (request, response) => {
  response
    .status(200)
    .send({
      'payment_methods': {
        'credit_cards': true,
        'paypal': false
      }
    });
});

app.post('/login', (request, response) => {
  response
    .status(200)
    .send(`Welcome ${request.body.userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
