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
            return `${p1Selection}`
        }
        else if (p1Selection === "rock"){
            if(p2Selection ==="paper"){
                console.log(`${this.player2.name}${this.player2.token} wins with ${p2Selection}!`)
                return `p2-win`
            }
            else{
                console.log(`${this.player1.name}${this.player1.token} wins with ${p1Selection}!`)
                return `p1-win`
            }
        }

        else if (p1Selection === "paper"){
            if(p2Selection ==="scissors"){
                console.log(`${this.player2.name}${this.player2.token} wins with ${p2Selection}!`)
                return `p2-win`
            }
            else{
                console.log(`${this.player1.name}${this.player1.token} wins with ${p1Selection}!`)
                return `p1-win`
            }
        }

        else if (p1Selection === "scissors"){
            if(p2Selection ==="rock"){
                console.log(`${this.player2.name}${this.player2.token} wins with ${p2Selection}!`)
                return `p2-win`
            }
            else{
                console.log(`${this.player1.name}${this.player1.token} wins with ${p1Selection}!`)
                return `p1-win`
            }
        }

    }
}


// ROCK > SCISSORS
// SCISSORS > PAPER
// PAPER > ROCK