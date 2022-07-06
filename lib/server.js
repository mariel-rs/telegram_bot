const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const FizzbuzzService = require("./services/FizzbuzzService");
const app = express();
app.use(express.json());
const port = 3000;

// initial path, it will reply to localhost:3000 url
app.get("/", (req, res) => {
    res.send("Fizzbuzz API Welcome");
});

// Endpoint: Get the explorers in a given mission (node or java)
app.get("/v1/explorers/:mission", (req, res) => {

    // Fetch mission param for the ExplorerController
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    // Output result
    res.json(explorersInMission);
}
);

// Endpoint: Get the amount of explorers in a given mission
app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);

    res.json({"mission": mission, "quantity": amountExplorers});
});

// Endpoint: Get the list of GitHub usernames in a given mission
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);

    res.json({"mission": mission, "usernames": usernamesInMission});
});

// Endpoint: Get the tricks given a number
app.get("/v1/fizzbuzz/:number", (req, res) => {
    const number = req.params.number;
    const trick = FizzbuzzService.applyValidationInNumber(number);

    res.json({"score": number, "trick": trick});
});

// initialize the app
app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost:${port}`);
});