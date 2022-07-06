const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

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
}

module.exports = ExplorerController;