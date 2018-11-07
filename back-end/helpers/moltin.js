const config = require('../config/config');
const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: config.moltin_client_id,
  client_secret: config.moltin_client_secret,
});

module.exports = Moltin;
