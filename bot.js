console.log('Bot started')

let Twit = require('twit')
let config = require('./config')

let T = new Twit(config)

const word = 'bitcoin'
const date = 'since:2011-07-17'
const count = 5

const params = { q: `${word} ${date}`, count }

T.get('search/tweets', params, function(err, data, response) {
  var { statuses: tweets } = data
  tweets.map(x => console.log(x.text))
})
