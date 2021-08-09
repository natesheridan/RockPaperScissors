class Game{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        
    }

    runGame(){

        var p1Selection = this.player1.takeTurn();
        var p2Selection =  this.player2.takeTurn();
        if (p1Selection === p2Selection){
            console.log("DRAW!")
            return `DRAW both chose ${p1Selection}`
        }
        else if (p1Selection === "rock"){
            if(p2Selection ==="paper"){
                currentP2.wins++
                return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
            }
            else{
                currentP1.wins++
                return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
            }
        }

        else if (p1Selection === "paper"){
            if(p2Selection ==="scissors"){
                currentP2.wins++
                return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
            }
            else{
                currentP1.wins++
                return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
            }
        }

        else if (p1Selection === "scissors"){
            if(p2Selection ==="rock"){
                currentP2.wins++
                return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
            }
            else{
                currentP1.wins++
                return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
            }
        }

    }
}


// ROCK > SCISSORS
// SCISSORS > PAPER
// PAPER > ROCK