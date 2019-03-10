var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')
const logger = require('morgan')
const {
  whichArticle,
  derEndings,
  dieEndings,
  seasons,
  days,
} = require('@ma.vu/which-article')
const toSentence = require('array-to-sentence')

const formatText = text => text.toLowerCase().trim()

function genSendMsg(res, id) {
  const TOKEN = process.env.BOT_TOKEN
  return function sendMsg(msg) {
    axios
      .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: id,
        text: `${msg}`,
      })
      .then(response => {
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  }
}

app.use(bodyParser.json()) // for parsing application/json
app.use(logger('combined'))
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.get('*', (req, res) => res.send('Beep Boop I am Telegram Bot!!'))
app.post('/heroku', async function(req, res) {
  const { message } = req.body
  const sendMsg = genSendMsg(res, message.chat.id)
  const text = formatText(message.text)

  if (text === 'der') {
    return sendMsg(toSentence(derEndings))
  } else if (text === 'die') {
    return sendMsg(toSentence(dieEndings))
  } else if (text === 'seasons') {
    return sendMsg(toSentence(seasons))
  } else if (text === 'days') {
    return sendMsg(toSentence(days))
  }

  const result = whichArticle(message.text)
  if (result) {
    return sendMsg(`${result.msg} ${result.gender} ${message.text}`)
  } else {
    return sendMsg(`I don't know ${message.text}`)
  }
})

module.exports = app
