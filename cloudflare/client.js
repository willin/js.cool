const sdk0 = require('sdk0');

module.exports = sdk0({
  baseURL: 'https://api.cloudflare.com/client/v4',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JS_COOL_CF_TOKEN}`
  }
});
