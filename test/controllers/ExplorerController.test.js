const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test suite for ExplorerController", () => {

    test("1. Test getExplorersByMission", () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");

        expect(explorersInJava).toStrictEqual(
            [
                {
                    "name": "Woopa6",
                    "githubUsername": "ajolonauta6",
                    "score": 6,
                    "mission": "java",
                    "stacks": [
                        "elm"
                    ]
                },
                {
                    "name": "Woopa7",
                    "githubUsername": "ajolonauta7",
                    "mission": "java",
                    "score": 7,
                    "stacks": [
                    ]
                },
                {
                    "name": "Woopa8",
                    "githubUsername": "ajolonauta8",
                    "score": 8,
                    "mission": "java",
                    "stacks": [
                        "elm"
                    ]
                },
                {
                    "name": "Woopa9",
                    "githubUsername": "ajolonauta9",
                    "score": 9,
                    "mission": "java",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa10",
                    "githubUsername": "ajolonauta10",
                    "score": 10,
                    "mission": "java",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
            ] 
        );
    });

    test("2. Test getExplorersUsernamesByMission", () => {

        const usernamesInJava = ExplorerController.getExplorersUsernamesByMission("java");

        expect(usernamesInJava).toStrictEqual([
            "ajolonauta6", 
            "ajolonauta7", 
            "ajolonauta8", 
            "ajolonauta9", 
            "ajolonauta10"
        ]);
    });

    test("3. Test getExplorersAmountByMission", () => {

        const totalUsersInJava = ExplorerController.getExplorersAmountByMission("java");

        expect(totalUsersInJava).toBe(5);
    });

    test("4. Test applyValidationInExplorer", () => {

        const explorersNode = ExplorerController.getExplorersByMission("node");

        const validatedExplorers = explorersNode.map((expl) => ExplorerController.applyValidationInExplorer(expl));

        // Set of users to test
        const fizzbuzz_user = validatedExplorers[validatedExplorers.length - 1];
        const fizz_user = validatedExplorers[2];
        const buzz_user = validatedExplorers[4];
        const normal_user = validatedExplorers[0];

        // Validate their tricks: 
        expect(fizzbuzz_user.trick).toBe("FIZZBUZZ");
        expect(fizz_user.trick).toBe("FIZZ");
        expect(buzz_user.trick).toBe("BUZZ");
        expect(normal_user.trick).toBe(1);
    });

    test("5. Test applyFizzbuzz", () => {

        const numbers = [99, 50, 30, -11];
        const tricks = numbers.map((number) => ExplorerController.applyFizzbuzz(number));

        // Validate
        expect(tricks).toStrictEqual(["FIZZ", "BUZZ", "FIZZBUZZ", -11]);
    });
});