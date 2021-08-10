var LS = localStorage
var currentView = '';
var currentP1 = '';
var currentP2 = '';
var currentGamemode = '';
var isGameRunning = false;
var welcomeView = document.querySelector('.welcome-view')
var setupView = document.querySelector('.setup-view')
var gameplayView = document.querySelector('.gameplay-view')
var sidebars = document.querySelector('.sidebars')
var gameplayMainScreen = document.querySelector('.gameplay-main-screen')
var rpsRadios = document.querySelector('#RPSSelection')
var goToSetupBtn = document.querySelector('#goToSetupBtn')
var saveToStorageBtn = document.querySelector('#saveToStorage')
var loginBtn = document.querySelector('#loginWDiffName')
var player1Display = document.querySelector('#RPSSelection')
var player2Display = document.querySelector('.opponent-selection')
var arrayParsed = [];
var currentPlayerIndex = "beans";
var rpsP1NormalSelectionDefault = `
<input name="rps" id="rock" type="radio" value="rock">
<label for="rock">⛰️
</label>
<input name="rps" id="paper" type="radio" value="paper">
<label for="paper">📜
</label>
<input name="rps" id="scissors" type="radio" value="scissors">
<label for="scissors">✂️
</label>
`
var rpsP1SpicySelectionDefault = `
<input name="rps" id="rock" type="radio" value="rock">
<label for="rock">⛰️
</label>
<input name="rps" id="paper" type="radio" value="paper">
<label for="paper">📜
</label>
<input name="rps" id="scissors" type="radio" value="scissors">
<label for="scissors">✂️
</label>
<input name="rps" id="lizard" type="radio" value="lizard">
<label for="lizard">🦎
</label>
<input name="rps" id="alien" type="radio" value="alien">
<label for="alien">👽
</label>
`
var rpsP2NormalSelectionDefault = `
<p>⛰️</p>
<p>📜</p>
<p>✂️</p>
`
var rpsP2SpicySelectionDefault= `
<p>⛰️</p>
<p>📜</p>
<p>✂️</p>
<p>🦎</p>
<p>👽</p>
`
rpsRadios.addEventListener('input', gameStart)
goToSetupBtn.addEventListener('click', function(){goToView(setupView)})
saveToStorageBtn.addEventListener('click', pushToLocalStorage)


document.querySelector('#welcomeForm button').addEventListener('click', welcomeScrnSubmit)
document.querySelector('#gamemodeSelection').addEventListener('input', gamemodeSelection)

function pullFromLocalStorage(){
    var searchQuery = currentP1.name;
    if (!arrayParsed){
        return
    }
    for (var i = 0; i < arrayParsed.length; i++) {
        var search = arrayParsed[i].name
        if (search === searchQuery){
            currentP1.username = arrayParsed[i].userName
            currentP1.losses = arrayParsed[i].losses
            currentP1.overallWins = arrayParsed[i].overallWins
            currentP1.normalWins = arrayParsed[i].normalWins
            currentP1.spicyWins = arrayParsed[i].spicyWins
            currentP1.token = arrayParsed[i].token
            currentPlayerIndex = i;
            popupMessage(`Results found for ${searchQuery}! Save loaded!`, 1500, "green")
            return
        }

    }
    popupMessage(`No local save results found for ${searchQuery}!`, 1500, "red")
}
function pushToLocalStorage(){
    debugger
    if (LS.length===0){
        arrayParsed = [currentP1];
        currentPlayerIndex = 0;
        popupMessage(`A NEW local save with the name of: ${currentP1.name} has been made!`, 1500, "green")
    }
    else if (LS.length===1 && currentPlayerIndex === "beans"){
        arrayParsed.push(currentP1)
        popupMessage(`A NEW local save with the name of: ${currentP1.name} has been made!`, 1500, "green")
    }
    else if (currentPlayerIndex>-1){
        arrayParsed[currentPlayerIndex] = currentP1;
        popupMessage(`A local save has been made to the name of: ${currentP1.name}`, 1500)
    }
    var arrToSet = JSON.stringify(arrayParsed);
    LS.setItem('savedUsers', arrToSet)
}

function updateDataModelStorage(){
    lsRawUserArray=LS.getItem('savedUsers')
    arrayParsed = JSON.parse(lsRawUserArray)
}

function resetBoard(gamemode){
    if (gamemode === "normal"){
        player1Display.innerHTML = ``;
        player1Display.innerHTML = rpsP1NormalSelectionDefault;
        player2Display.innerHTML = ``;
        player2Display.innerHTML = rpsP2NormalSelectionDefault;
    }
    else if (gamemode === "spicy"){
        player1Display.innerHTML = ``;
        player1Display.innerHTML = rpsP1SpicySelectionDefault;
        player2Display.innerHTML = ``;
        player2Display.innerHTML = rpsP2SpicySelectionDefault;
    }
    
}

function returnRPSSelection(){
    var rpsSelection = document.querySelector('#RPSSelection input[type=radio]:checked');
    return rpsSelection.value;
}

function showPlayersSelection(){
    var p1Selection = currentP1.currentSelection;
    var p2Selection = currentP2.currentSelection;
    if (p1Selection === "rock"){
        player1Display.innerHTML = `
        <input name="rps" id="rock" type="radio" value="rock">
        <label for="rock">⛰️
        </label>
        `
    }
    else if (p1Selection === "paper"){
        player1Display.innerHTML = `
        <input name="rps" id="paper" type="radio" value="paper">
        <label for="paper">📜
        </label>
        `
    }
    else if (p1Selection === "scissors"){
        player1Display.innerHTML = `
        <input name="rps" id="scissors" type="radio" value="scissors">
        <label for="scissors">✂️
        </label>
        `
    }
    else if (p1Selection === "lizard"){
        player1Display.innerHTML = `
        <input name="rps" id="lizard" type="radio" value="lizard">
        <label for="lizard">🦎
        </label>
        `
    }
    else if (p1Selection === "alien"){
        player1Display.innerHTML = `
        <input name="rps" id="alien" type="radio" value="alien">
        <label for="alien">👽
        </label>
        `
    }
    if (p2Selection === "rock"){
        player2Display.innerHTML = `<p>⛰️</p>
        `
    }
    else if (p2Selection === "paper"){
        player2Display.innerHTML = `<p>📜</p>
        `
    }
    else if (p2Selection === "scissors"){
        player2Display.innerHTML = `<p>✂️</p>
        `
    }
    else if (p2Selection === "lizard"){
        player2Display.innerHTML = `<p>🦎</p>
        `
    }
    else if (p2Selection === "alien"){
        player2Display.innerHTML = `<p>👽</p>
        `
    }
}

function gameStart(){
    if (isGameRunning){
        return
    }
    isGameRunning = true;
    var rpsSelection = returnRPSSelection()
    var game = new Game(currentP1, currentP2)
    popupMessage(`Game has begun your answer (${rpsSelection}) will be locked in : 5`, 950)
    setTimeout(function(){
        var rpsSelection = returnRPSSelection()
        popupMessage(`Game has begun your answer (${rpsSelection}) will be locked in : 4`, 950)
    }, 1000)
    setTimeout(function(){
        var rpsSelection = returnRPSSelection()
        popupMessage(`Game has begun your answer (${rpsSelection}) will be locked in : 3`, 950)
    }, 2000)
    setTimeout(function(){
        var rpsSelection = returnRPSSelection()
        popupMessage(`Game has begun your answer (${rpsSelection}) will be locked in : 2`, 950, "red")
    }, 3000)
    setTimeout(function(){
        var rpsSelection = returnRPSSelection()
        popupMessage(`Game has begun your answer (${rpsSelection}) will be locked in : 1`, 950, "red")
    }, 4000)
    setTimeout(function(){
        var rpsSelection = returnRPSSelection()
        currentP1.takeTurn(`${rpsSelection}`)
        popupMessage(`Your answer (${rpsSelection}) has been locked in!`, 2500, "green")
    }, 5000)
    setTimeout(function(){
        if (currentGamemode === "normal"){
            popupMessage(game.runGame("normal"), 7000);
        }
        else if (currentGamemode === "spicy"){
            popupMessage(game.runGame("spicy"), 7000);
        }
        showPlayersSelection()
        updatePlayerSidebars()

    }, 8000)
    setTimeout(function(){
        isGameRunning = false;
        resetBoard(currentGamemode)
    }, 15000)

}

function gamemodeSelection(event){
    event.preventDefault();
    var gamemodeSelection = document.querySelector('#gamemodeSelection input[type=radio]:checked').value
    if (gamemodeSelection===null){
        console.log("errorMessage")
    }
    else if (gamemodeSelection==="normal"){
        setupGamemode("normal")
        setTimeout(function(){
            popupMessage(`Select your fighter on the left side to start the game!`, 3333, "blue")
        }, 500)
    }
    else if (gamemodeSelection==="spicy"){
        setupGamemode("spicy")
        setTimeout(function(){
            popupMessage(`Select your fighter on the left side to start the game!`, 3333, "blue")
        }, 500)
    }
}

function setupGamemode(gamemode){
    currentGamemode = gamemode;
    if (gamemode === "normal"){
        goToView(gameplayView)
        show (goToSetupBtn)
        resetBoard(gamemode)
        return
    }
    else if (gamemode == "spicy"){
        goToView
        goToView(gameplayView)
        show (goToSetupBtn)
        resetBoard(gamemode)
        return;
    }
}

function welcomeScrnSubmit(event){
    event.preventDefault();
    var userName = document.querySelector('#welcomeForm input[type=text]').value
    var userToken = document.querySelector('#welcomeForm input[type=radio]:checked').value
    if (!userName){
        popupMessage("Please provide a name", 1500, "red")
        return
    }
    currentP1 = new Player (userName, userToken)
    currentP1.setUniqueID();
    currentP2 = new Computer ("Computer")
    pullFromLocalStorage()
    updatePlayerSidebars()
    goToView(setupView)




}


function updatePlayerSidebars(){
    var userName = currentP1.name;
    var userToken = currentP1.token;
    var userTotalWins = currentP1.overallWins
    var userNormalWins = currentP1.normalWins
    var userSpicyWins = currentP1.spicyWins
    var userLosses = currentP1.losses

    document.querySelector('.player1').innerHTML = `
    <h2>${userToken}</h2>
    <h3>${userName}</h3>
    <p>TOTAL WINS : ${userTotalWins}</p>
    <br>
    <p>😀 Ws : ${userNormalWins}</p>
    <p>🌶 Ws : ${userSpicyWins}</p>
    <br>
    <p>L's Taken: ${userLosses}</p>
    `
    var userName = currentP2.name;
    var userToken = currentP2.token;
    var userTotalWins = currentP2.overallWins
    var userNormalWins = currentP2.normalWins
    var userSpicyWins = currentP2.spicyWins
    var userLosses = currentP2.losses
    document.querySelector('.player2').innerHTML = `
    <h2>${userToken}</h2>
    <h3>${userName}</h3>
    <p>TOTAL WINS : ${userTotalWins}</p>
    <br>
    <p>😀 Ws : ${userNormalWins}</p>
    <p>🌶 Ws : ${userSpicyWins}</p>
    <br>
    <p>L's Taken: ${userLosses}</p>
    `
}

function goToView(view){
    hide(welcomeView)
    hide(setupView)
    hide(gameplayView)
    hide(goToSetupBtn)
    hide(saveToStorageBtn)
    show(sidebars)
    show(view)
    if(view===setupView){
        show(saveToStorageBtn)
    }
    updatePlayerSidebars();
    currentView = view
}

function hide(element){
    element.classList.add('hidden');
    
}

function show(element){
    element.classList.remove('hidden');
}

function popupMessage(message, timeInMS, color = "gold"){
    popupContainer = document.querySelector('#popup')
    popupContainer.classList.add(`${color}-popup`)
    popupContainer.innerHTML=`<p>${message}</p>`
    show(popupContainer)

    setTimeout(function(){
        popupContainer.classList.remove(`${color}-popup`)
        hide(popupContainer);
    }, timeInMS)
}

updateDataModelStorage()