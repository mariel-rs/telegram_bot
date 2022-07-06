const Reader = require("./../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

// Test suite

describe("Test suite for FizzbuzzService", () => {

    test("1. Get the tricks depending on the explorer score", () => {
        const explorers = Reader.readJsonFile("test/services/testFile.json");
        
        // Apply validation to all explorers in the array
        const validatedExplorers = explorers.map((item) => FizzbuzzService.applyValidationInExplorer(item));

        // Woopa1 has score of 15 (multiple of 3 and 5)
        expect(validatedExplorers[0].trick).toBe("FIZZBUZZ");

        // Woopa2 has score of 1 (not a multiple of 3 nor of 5)
        expect(validatedExplorers[1].trick).toBe(1);

        // Woopa3 has score of 5 (multiple of 5)
        expect(validatedExplorers[2].trick).toBe("BUZZ");

        // Woopa4 has score of 9 (multiple of 3)
        expect(validatedExplorers[3].trick).toBe("FIZZ");

    });

    test("2. Get the tricks using number validation", () => {
        const testNumbers = [36, 45, 2, 15.001, 55];

        const tricks = testNumbers.map((number) => FizzbuzzService.applyValidationInNumber(number));

        // Validate the tricks
        expect(tricks).toStrictEqual(["FIZZ", "FIZZBUZZ", 2, 15.001, "BUZZ"]);
    });
});