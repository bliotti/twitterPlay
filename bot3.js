console.log('Bot started')

let Twit = require('twit')
let config = require('./config')

let T = new Twit(config)

const status = 'Buy Bitcoin Again Once More'

const handle = { screen_name: 'tolga_tezel' }

const tweeted = function(err, data, response) {
  if (err) {
    console.log('Somethings Wrong!')
    console.log(err)
  } else {
    console.log('It Worked!')
    console.log(data)
  }
}

T.get('followers/ids', handle, tweeted)
