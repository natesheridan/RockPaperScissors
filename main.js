var welcomeView = document.querySelector('.welcome-view')
var setupView = document.querySelector('.setup-view')
var gameplayView = document.querySelector('.gameplay-view')
var sidebars = document.querySelector('.sidebars')
var gameplayMainScreen = document.querySelector('.gameplay-main-screen')
var currentView = '';
var currentP1 = '';
var currentP2 = '';


document.querySelector('#welcomeForm button').addEventListener('click', welcomeScrnSubmit)
document.querySelector('.game-selection-submit').addEventListener('click', gamemodeSelection)







function populateNewGame(){
    gameplayMainScreen.innerHTML = '';
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
        goToGamemode(spicy)
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
    popupContainer.classList.add(`!${color}-popup`)
    popupContainer.innerHTML=`<p>${message}</p>`
    show(popupContainer)

    setTimeout(function(){
        hide(popupContainer);
    }, timeInMS)
}