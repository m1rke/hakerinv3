// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://hakerin:Miremire2404@ds159856.mlab.com:59856/hakerindb',
  secret: crypto,
  db: 'hakerindb'
}
