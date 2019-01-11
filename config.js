require('dotenv').config()

module.exports = {
  consumer_key: process.env.TwitterApiKey,
  consumer_secret: process.env.TwitterApiSecretKey,
  access_token_key: process.env.AccessToken,
  access_token_secret: process.env.AccessTokenSecret
}
