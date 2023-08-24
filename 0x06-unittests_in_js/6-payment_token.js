module.exports = function getPaymentTokenFromApi (success) {
  if (success) {
    return Promise.resolve({
      'data': 'Successful response from the API'
    });
  }
}
