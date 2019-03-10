## What is this

Telegram has very good support for making bots, much better then viber &
whatsup.

There is two way to create them, as long pooling process and with webhooks. This
is with webhooks.

### Setup
I'm assuming you know how to use heroku, this is very minimal explanation.

1. You need to create 'empty' bot, or register bot with telegrams `BotFather`
   [here](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
2. Rename `variables.env.example` to `variables.env`
3. When `BotFather` gives you token paste this token to `variables.env`

## Deploy with Heroku

1. [Setup with heroku](https://devcenter.heroku.com/articles/git)
2. run `npm run sync`

### If something goes wrong make sure:

1. You have your bot token in `variables.env` `git remote -v` has heroku as one
   of remotes
2. Your app is running
3. You successfully ran `npm run sync`
