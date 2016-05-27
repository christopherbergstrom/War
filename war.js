var body;
var play;
var instructions;
var board;
var compDeck;
var compCard;
var playerDeck;
var playerCard;

window.onload=function()
{
  body = document.querySelector("body");
  play = document.getElementById("play");
  play.addEventListener("click", function()
  {
    removeInstructions();
    play();
  });
  instructions = document.getElementById("instructions");
  instructions.addEventListener("click", function()
  {
    removeInstructions();
    createInstructions();
  });
  board = document.createElement("div");
  board.setAttribute("id", "board")
  compDeck = document.createElement("div");
  compDeck.setAttribute("id", "compDeck");
  compCard = document.createElement("div");
  compCard.setAttribute("id", "compCard");
  playerDeck = document.createElement("div");
  playerDeck.setAttribute("id", "playerDeck");
  playerCard = document.createElement("div");
  playerCard.setAttribute("id", "playerCard");
};
function removeInstructions()
{
  var instructionsText = document.getElementById("instructionsText");
  if (instructionsText)
  {
    instructionsText.parentNode.removeChild(instructionsText);
  }
}
function createInstructions()
{
  var instructionsText = document.createElement("div");
  instructionsText.setAttribute("id", "instructionsText");
  instructionsText.innerHTML="Draw cards to play the game. The player with the higher card value keeps both cards. If both cards have the same value each card goes back to its original owner. The game ends when one player has all of the cards.";
  body.appendChild(instructionsText);
}
function play()
{

}
