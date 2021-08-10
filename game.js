class Game{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        
    }

    runGame(gamemode){
        if (gamemode === "normal"){
            var p1Selection = this.player1.takeTurn();
            var p2Selection =  this.player2.takeTurn(gamemode);
            if (p1Selection === p2Selection){
                return `DRAW both chose ${p1Selection}`
            }
            if (p1Selection === "rock"){
                if(p2Selection ==="paper"){
                    currentP2.overallWins++;
                    currentP2.normalWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
                else{
                    currentP1.overallWins++
                    currentP1.normalWins++;
                    currentP2.losses++
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
            }
            
            else if (p1Selection === "paper"){
                if(p2Selection ==="scissors"){
                    currentP2.overallWins++;
                    currentP2.normalWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
                else{
                    currentP1.overallWins++
                    currentP1.normalWins++;
                    currentP2.losses++
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
            }
            
            else if (p1Selection === "scissors"){
                if(p2Selection ==="rock"){
                    currentP2.overallWins++;
                    currentP2.normalWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
                else{
                    currentP1.overallWins++
                    currentP1.normalWins++;
                    currentP2.losses++
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
            }
        }
        
        if (gamemode === "spicy"){
            var p1Selection = this.player1.takeTurn();
            var p2Selection =  this.player2.takeTurn(gamemode);
            if (p1Selection === p2Selection){
                console.log("DRAW!")
                return `DRAW both chose ${p1Selection}`
            }
            if (p1Selection === "rock"){
                if (p2Selection === "scissors" || p2Selection === "lizard"){
                    currentP1.overallWins++;
                    currentP1.spicyWins++;
                    currentP2.losses++;
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
                else {
                    currentP2.overallWins++;
                    currentP2.spicyWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
            }
            else if (p1Selection === "paper"){
                if (p2Selection === "rock" || p2Selection === "alien"){
                    currentP1.overallWins++;
                    currentP1.spicyWins++;
                    currentP2.losses++;
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
                else {
                    currentP2.overallWins++;
                    currentP2.spicyWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
            }
            else if (p1Selection === "scissors"){
                if (p2Selection === "paper" || p2Selection === "lizard"){
                    currentP1.overallWins++;
                    currentP1.spicyWins++;
                    currentP2.losses++;
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
                else {
                    currentP2.overallWins++;
                    currentP2.spicyWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
            }
            else if (p1Selection === "lizard"){
                if (p2Selection === "paper" || p2Selection === "alien"){
                    currentP1.overallWins++;
                    currentP1.spicyWins++;
                    currentP2.losses++;
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
                else {
                    currentP2.overallWins++;
                    currentP2.spicyWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
            }
            else if (p1Selection === "alien"){
                if (p2Selection === "scissors" || p2Selection === "rock"){
                    currentP1.overallWins++;
                    currentP1.spicyWins++;
                    currentP2.losses++;
                    return `${this.player1.name} ${this.player1.token} WINS w/ ${p1Selection} beating ${p2Selection}!`
                }
                else {
                    currentP2.overallWins++;
                    currentP2.spicyWins++;
                    currentP1.losses++;
                    return `${this.player2.name} ${this.player2.token} WINS w/ ${p2Selection} beating ${p1Selection}!`
                }
            }
        }
    }
}    
    
    


// ROCK > SCISSORS & LIZARD
// SCISSORS > ROCK & ALIEN
// PAPER > PAPER & LIZARD
// LIZARD > PAPER & ALIEN
// ALIEN > SCISSORS & ROCK




// ROCK > SCISSORS
// SCISSORS > PAPER
// PAPER > ROCK