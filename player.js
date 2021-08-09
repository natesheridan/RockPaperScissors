class Player{
    constructor(name, token = "😬"){
        this.type = "human"
        this.name = name;
        this.wins = 0;
        this.token = token;
        this.currentSelection =""

    }
    saveWinsToStorage(){

    }
    retrieveWinsFromStorage(){

    }
    takeTurn(selection){
        if (selection){
            this.currentSelection = selection;
        }
        return `${this.currentSelection}`
    }


}


