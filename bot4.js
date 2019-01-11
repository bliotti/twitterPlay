console.log('Bot started')
let Twit = require('twit')
let config = require('./config')
let T = new Twit(config)
const charlestonCryptoID = 1031322453866373100

T.get('account/verify_credentials', { skip_status: true })
  .catch(function(err) {
    console.log('caught error', err.stack)
  })
  .then(function(result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.

    console.log('data', result.data)
  })
