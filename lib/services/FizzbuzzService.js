class FizzbuzzService{

    static applyValidationInExplorer(explorer){

        // Initialize trick field with score
        explorer.trick = explorer.score;

        // Logic
        if(explorer.score % 3 == 0){
            explorer.trick = "FIZZ";

            if(explorer.score % 5 == 0){
                explorer.trick = "FIZZBUZZ";
            }
        }
        else if(explorer.score % 5 == 0){
            explorer.trick = "BUZZ";
        }
        return explorer;
    }

    static applyValidationInNumber(number){
        
        // Initialize trick field with number
        let trick = number;

        // Logic
        if(number % 3 == 0){
            trick = "FIZZ";

            if(number % 5 == 0){
                trick = "FIZZBUZZ";
            }
        }
        else if(number % 5 == 0){
            trick = "BUZZ";
        }
        return trick;
    }
}

module.exports = FizzbuzzService;