# Rock Paper Scissors
![preview](https://imgur.com/sJowJUj.png)
#### A great way to play rock paper scissors by yourself! (Coming soon: Friends!)
## Contributors
[Nate Sheridan](https://github.com/natesheridan)

### Languages and Libraries
HTML - ◘ - CSS - ◘ - JAVASCRIPT

# Info

In this project, I was expected to build a web based rock paper scissers based of a video comphrensive, although a comp. was given not many rules or standards were given.  The project currently includes two gamemodes of rockpaper scissors and optional profile saving to local storage based on user inputted name. Users also have the option to choose a token or emoji to represent them somewhat like a mascot. [ <+> ](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)


## App Use (and screenshots)
On first load the user is presented with a normal landing page asking for the users name and token;
![preview](https://imgur.com/sJowJUj.png)

If the user has saved their stats using the same name the built in pop up message will display a confirmation to log the success. If the user has not played using the same name on the same local machine nothing will log.
![login to LocalStorage preview](https://imgur.com/gI34nZn.png)

After logging in or providing the site a name - the user is given the option to play either

Normal Mode 
![normal mode](https://imgur.com/EjX3IIq.png)

or Spicy Mode
![spicy mode](https://imgur.com/JhFlA9D.png)

All of this selection is taking place using radio type inputs, and is updating a global variable that changes different settings for loading the game based on the gamemode given to it.
(From the above mentioned screen the user can also save their progress on the left sidebar as well)
![gamemode selection preview](https://imgur.com/RRjLMNh.png)

Games will either be normal or spicy and the games are played versus the computer. (below is a normal game)
![normal Game Preview](https://imgur.com/XEBBria.png)

The game runs as following : 
When the user clicks a selection a timer is begun expressing to the user that their countdown will be locked in
After the time is done - the users selection is locked in and put up against the computers random selection
The results of the match are displayed on the DOM in the gameplay view
From there the elements in the gameplay view are reset to original.
![gameplay preview](https://s6.gifyu.com/images/maketogi.gif)

Users can then go back to the homescreen using the <= Gamemodes buttton and save their score whenever they please.

## Local Installation
Local install is easy with a web game like this one

Either use the green "download code" button ![downloadbutton](https://imgur.com/lYy4FVP.png) at the top of the page to copy a clone link or right-click [here](https://github.com/natesheridan/RockPaperScissors.git) and click "Copy link address"

From there open your Terminal and navigate to the directory you would like to store the web app inside of

Once you are in the directory execute the following command:

    git clone https://github.com/natesheridan/RockPaperScissors.git
(this command assumes that the Github link you copied above matches.)

then navigate inside of the directory

    cd intention-timer
then open the index.html file using the following command

    open index.html

From there you are ready to start playing rock paper scissors by yourself!


 
