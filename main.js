var welcomeView = document.querySelector('.welcome-view')
var setupView = document.querySelector('.setup-view')
var gameplayView = document.querySelector('.gameplay-view')
var sidebars = document.querySelector('.sidebars')
var gameplayMainScreen = document.querySelector('.gameplay-main-screen')
var currentView = '';
var currentP1 = '';
var currentP2 = '';
var rpsRadios = document.querySelector('#RPSSelection')

rpsRadios.addEventListener('input', gameStart)


document.querySelector('#welcomeForm button').addEventListener('click', welcomeScrnSubmit)
document.querySelector('.game-selection-submit').addEventListener('click', gamemodeSelection)









function displayWinner(){

}

function populateNewGame(){
    gameplayMainScreen.innerHTML = '';
}

function returnRPSSelection(){
    var rpsSelection = document.querySelector('#RPSSelection input[type=radio]:checked');
    return rpsSelection.value;
}


var isGameRunning = false;

function gameStart(){
    if (isGameRunning){
        return
    }
    isGameRunning = true;
    var rpsSelection = returnRPSSelection()
    var game = new Game(currentP1, currentP2)
    console.log(game)
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
        popupMessage(game.runGame(), 2000)
        updatePlayerSidebars()
    }, 8000)
    setTimeout(function(){
        isGameRunning = false;
    }, 10000)

}

function gamemodeSelection(event){
    event.preventDefault();
    var gamemodeSelection = document.querySelector('#gamemodeSelection input[type=radio]:checked').value
    if (!gamemodeSelection){
        console.log("errorMessage")
    }
    else if (gamemodeSelection==="normal"){
        goToGamemode("normal")
    }
    else if (gamemodeSelection==="spicy"){
        goToGamemode("spicy")
    }
}

function goToGamemode(gamemode){
    if (gamemode === "normal"){
        goToView(gameplayView)
    }
    else if (gamemode == "spicy"){
        return;
    }
}


function welcomeScrnSubmit(event){
    event.preventDefault();
    var userName = document.querySelector('#welcomeForm input[type=text]').value
    var userToken = document.querySelector('#welcomeForm input[type=radio]:checked').value
    if (!userName){
        return
    }
    currentP1 = new Player (userName, userToken)
    currentP2 = new Computer ("Computer")
    updatePlayerSidebars()
    goToView(setupView)


};

function updatePlayerSidebars(){
    var userName = currentP1.name;
    var userToken = currentP1.token;
    var userWins = currentP1.wins

    document.querySelector('.player1').innerHTML = `
    <h2>${userToken}</h2>
    <h3>${userName}</h3>
    <p>WINS : ${userWins}</p>
    `
    var userName = currentP2.name;
    var userToken = currentP2.token;
    var userWins = currentP2.wins
    document.querySelector('.player2').innerHTML = `
    <h2>${userToken}</h2>
    <h3>${userName}</h3>
    <p>WINS : ${userWins}</p>
    `
}


function goToView(view){
    hide(welcomeView)
    hide(setupView)
    hide(gameplayView)
    show(sidebars)
    show(view)
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
        hide(popupContainer);
    }, timeInMS)
}