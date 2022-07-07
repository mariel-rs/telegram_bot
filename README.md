# Telegram Bot

This is a small project done for the LaunchX backend mission (Node.js) during
week 5.

## Functionality

Depending on the input type the bot receives, it will return a different 
response:

- If the bot receives a number, it will apply the Fizzbuzz number validation. 
- If the bot receives a string, it will assume the user is giving a mission name
and interested in the explorers who are enrolled in the given mission.

## Dependencies

- dotenv: Load environment variables
- eslinter: Quality style following ECMAScript6
- jest: Unit testing
- node-telegram-bot-api: Telegram bot API for Node.js

To install the dependencies, run:

```cmd
npm install
```