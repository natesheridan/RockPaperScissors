class Computer{
    constructor(name){
        this.type = "cpu"
        this.name = name;
        this.wins = 0;
        this.token = "💻";
        this.currentSelection;
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
        this.currentSelection = selection;
        return `${selection}`;
    }



}