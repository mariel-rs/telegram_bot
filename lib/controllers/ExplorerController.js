require("dotenv").config();
const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const TelegramBot = require("node-telegram-bot-api");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);

        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return usernamesInMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const totalExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return totalExplorersInMission;
    }

    static applyValidationInExplorer(explorer){
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);

        return validatedExplorer;
    }

    static applyFizzbuzz(number){
        const validatedTrick = FizzbuzzService.applyValidationInNumber(number);

        return validatedTrick;
    }

    static botBackendOn(){

        const token = process.env.TOKEN;

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);

        });

        return bot;

    }

    static botLogic(){

        // Turn on bot
        const bot = this.botBackendOn();

        // Listen for messages
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const userInput = parseInt(msg.text);
            let responseBot = "";

            if(!isNaN(userInput)){
                const fizzbuzzTrick = this.applyFizzbuzz(userInput);
                responseBot = `Tu número es: ${userInput}. Validación: ${fizzbuzzTrick}`;
            } 
            else {
                const userInput = msg.text;
                const explorersInMission = this.getExplorersUsernamesByMission(userInput);

                if(explorersInMission.length === 0){
                    responseBot = `No hay usuarios en la misión ${userInput}`;
                }
                else{
                    responseBot = `Los explorers en la misión ${userInput} son: ${explorersInMission.join(", ")}`;
                }
            }

            bot.sendMessage(chatId, responseBot);
        });

    }
}

module.exports = ExplorerController;