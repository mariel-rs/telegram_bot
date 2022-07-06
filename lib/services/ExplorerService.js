class ExplorerService{

    static filterByMission(explorers, mission){

        const explorersInMission = explorers.filter((exp) => exp.mission == mission);

        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const totalExplorersInMission = this.filterByMission(explorers, mission).length;
        
        return totalExplorersInMission;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        const usernames = explorersInMission.map((exp) => exp.githubUsername);
        
        return usernames;
    }
}

module.exports = ExplorerService;