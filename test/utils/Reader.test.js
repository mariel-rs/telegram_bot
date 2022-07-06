const Reader = require("./../../lib/utils/Reader");

describe("Unit test for Reader class", () => {
    test("Read a JSON file with Explorers info", () => {
        const explorers = Reader.readJsonFile("test/utils/testFile.json");

        expect(explorers).toStrictEqual(
            [
                {
                    "name": "Woopa1",
                    "githubUsername": "user1",
                    "score": 1,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "rust"
                    ]
                },
                {
                    "name": "Woopa2",
                    "githubUsername": "user2",
                    "score": 2,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "ruby"
                    ]
                }
            ]
        );
    });
});