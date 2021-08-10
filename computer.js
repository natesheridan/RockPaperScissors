class Computer{
    constructor(name){
        this.type = "cpu"
        this.name = name;
        this.wins = 0;
        this.token = "💻";
        this.currentSelection;
    }
    takeTurn(gamemode = "normal"){
        if(gamemode === "normal"){
            var num = 3;   
        }
        if (gamemode === "spicy"){
            var num = 5;
        }
        var randomNumber = randomNum(num)
        var selectionResult = returnSelection(randomNumber)
        this.currentSelection = selectionResult
        return `${this.currentSelection}`
    }



}
function randomNum(numRange){
    var randomNumber = (Math.floor(Math.random() * numRange));
    return randomNumber
}

function returnSelection(number){
    if (number===0){
        return `rock`
    }
    if (number===1){
        return `paper`
    }
    if (number===2){
        return `scissors`
    }
    if (number===3){
        return `lizard`
    }
    if (number===4){
        return `alien`
    }
}