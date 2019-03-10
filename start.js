const app = require('./index')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'variables.env' })
}
const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log(`Telegram app listening on port ${PORT}!`)
})
