require('dotenv').config()

//https://developer.twitter.com/en/docs/api-reference-index

//Callback functions
var error = function(err, response, body) {
  console.log('ERROR [%s]', err)
}
var success = function(data) {
  console.log('Data [%s]', data)
}

var Twitter = require('twitter-node-client').Twitter

//Get this data from your twitter apps dashboard
const key = {
  consumerKey: process.env.TwitterApiKey,
  consumerSecret: process.env.TwitterApiSecretKey,
  accessToken: process.env.AccessToken,
  accessTokenSecret: process.env.AccessTokenSecret,
  callBackUrl: 'http://127.0.0.1'
}

// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

var twitter = new Twitter()

//Example calls

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10' }, error, success)

twitter.getMentionsTimeline({ count: '10' }, error, success)

twitter.getHomeTimeline({ count: '10' }, error, success)

twitter.getReTweetsOfMe({ count: '10' }, error, success)

twitter.getTweet({ id: '1111111111' }, error, success)

//
// Get 10 tweets containing the hashtag haiku
//

twitter.getSearch({ q: '#haiku', count: 10 }, error, success)

//
// Get 10 popular tweets with a positive attitude about a movie that is not scary
//

twitter.getSearch(
  { q: ' movie -scary :) since:2013-12-27', count: 10, result_type: 'popular' },
  error,
  success
)
