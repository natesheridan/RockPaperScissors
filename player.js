class Player{
    constructor(name, token = "😬"){
        this.type = "human"
        this.name = name;
        this.overallWins = 0;
        this.normalWins = 0;
        this.spicyWins = 0;
        this.losses = 0;
        this.token = token;
        this.currentSelection ="";
        this.uniqueID = "";

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
    setUniqueID(){
        if (!this.uniqueID){
            this.uniqueID = Date.now();
        }
    }


}


