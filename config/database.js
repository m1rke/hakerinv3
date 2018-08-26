// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://
  secret: crypto,
  db: 'hakerindb'
}
