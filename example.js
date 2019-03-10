const { whichArticle: what, derEndings } = require('@ma.vu/which-article')
// this is what we get from telegram
var message = {
  message_id: 127,
  from: {
    id: 11111,
    is_bot: false,
    first_name: 'John',
    last_name: 'Doe',
    language_code: 'en',
  },
  chat: {
    id: 11111,
    first_name: 'John',
    last_name: 'Doe',
    type: 'private',
  },
  date: 1552088694,
  text: 'Madchen',
}

// console.log(what('froung'))
console.log(what('Mai'), 'month')
