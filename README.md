### Rock Paper Scissors 

# Single player Work Flow
for this app i thought it would be useful to start building the single player side, getting the functionality working then working through design (obviuosly didnt make it very far on design). if you select single player type in your name(not required) and select either rock paper or scissors you will be prompted if you won or lost to the computer playing against you. i used math random to make a random number between 1 and 3 to generate if it was going to choose rock papr or scissors. built a small formula using a switch statement so i can prmopt the win or loss. and then built a start over button to clear all fields so you can play again. 

# Multi Player workflow (not working)
The idea was to fo a multiplayer game in the same browser just do to time i didnt want to spend to much time setting up sockets and such to be able to have a dual browser application which is something i could do to improve the game in the future. So the game flow on multiplay would be that both players and input there name. Player 1 would select either rock paper or scissors and then the screen would prompt player 2 to do the same. after which you can select the subnmit button and it would notify you of who won. some improvements would be to add a stepper or something similar so after the users select it would take them to the next stepo to submit. 

# Over all improvements i would like to implement 
i would like to add either icons or images to take place of the text for the rock paper and scissors. get the multiplayer working using a stepper so that each step of the game can be better managed. maybe implement something similar in single player as well. i would also like to use a toast to show who won the match. i would like to improve the formula to find the winner make it a little more readable and easier to change the messages and such. the overall flow of the game could be improved. right now the whoel game just shows and its not very easy on the eyes i would like to make the UX experience more fun maybe flash rocks from on the background if that was the winning selection or something similar. make the card more dynamic to the sizing of the text and more mobile friendly. 

# Need to finish
hook up to google firebase so users can sign in and save there game results. building out stepper for multiplayer and finish multiplayer. 

# Goal 
i wanted to build a playable game that could be played in single player with the logic provided with a little styling. i wanted to achieve as much from the doc as i could in the 3 hour time limit. 