console.log('Follow Bot Started')
let Twit = require('twit')
let config = require('./config')
let T = new Twit(config)
var stream = T.stream('user', { stringify_friend_ids: true })

// function followed(eventMsg) {
//   console.log('Follow Event')
//   let name = eventMsg.source.name
//   let screenName = eventMsg.source.screen_name
//   tweetIt(`@${screenName} Thank you for the follow. Do you like Bitcoin?`)
// }

// setInterval(tweetIt, 1000 * 60 * 2)
// tweetIt()

// function tweetIt(txt) {
//   // let r = Math.floor(Math.random() * 100)
//   // const tweet = { status: `Here is a random number: ${r} #bot` }

//   const tweet = { status: txt }

//   const tweeted = function(err, data, response) {
//     if (err) {
//       console.log('Somethings Wrong!')
//       console.log(err)
//     } else {
//       console.log('It Worked!')
//       console.log(data.text)
//     }
//   }

//   T.post('statuses/update', tweet, tweeted)
// }

// stream.on('follow', followed)
