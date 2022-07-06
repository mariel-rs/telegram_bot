const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

// Test suite

describe("Tests for ExplorerService", () => {

    test("Filter explorers by mission", () => {

        const explorers = Reader.readJsonFile("test/services/testFile.json");

        const nodeExplorers = ExplorerService.filterByMission(explorers, "node");
        
        // Only 2 explorers have the Node mission
        expect(nodeExplorers.length).toBe(2);
        expect(nodeExplorers).toStrictEqual(
            [
                {
                    "name": "Woopa1",
                    "githubUsername": "user1",
                    "score": 15,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "rust"
                    ]
                },
                {
                    "name": "Woopa4",
                    "githubUsername": "user4",
                    "score": 9,
                    "mission": "node",
                    "stacks": [
                        "c++",
                        "c",
                        "javascript"
                    ]
                }
            ]
        );
    });

    test("Get the number of explorers by mission", () => {
        const explorers = Reader.readJsonFile("test/services/testFile.json");

        const nodeExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        
        // Only 2 explorers have the Node mission
        expect(nodeExplorers).toBe(2);
    });

    test("Get the explorers GitHub usernames by mission", () => {
        const explorers = Reader.readJsonFile("test/services/testFile.json");

        const nodeExplorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "ruby");
        
        // Only 2 explorers have the Ruby mission
        expect(nodeExplorersUsernames).toStrictEqual(["user2", "user3"]);
    });
});