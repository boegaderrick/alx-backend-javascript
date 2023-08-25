const express = require('express');
const app = express();


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

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
