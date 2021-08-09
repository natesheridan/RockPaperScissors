class Computer{
    constructor(name, token){
        this.type = "cpu"
        this.name = name;
        this.wins = 0;
        this.token = "💻";
        this.winningGif = "";
        this.losingGif = "";
    }
    takeTurn(){
        var selection = '';
        var randomNumber0to2 = (Math.floor(Math.random() * 3))
        if (randomNumber0to2===0){
            selection = "rock";
        }
        else if(randomNumber0to2===1){
            selection = "paper";
        }
        else if(randomNumber0to2===2){
            selection = "scissors";
        }
        return `${selection}`;
    }



}

