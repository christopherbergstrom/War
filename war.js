var body;
var play;
var instructions;
var board;
var compDeck;
var compArray=[];
var compCard;
var playerDeck;
var playerArray=[];
var playerCard;
var draw;

window.onload=function()
{
  body = document.querySelector("body");
  play = document.getElementById("play");
  play.addEventListener("click", function()
  {
    removeInstructions();
    playGame();
  });
  instructions = document.getElementById("instructions");
  instructions.addEventListener("click", function()
  {
    removeInstructions();
    createInstructions();
  });
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
function createDeck()
{
  var mainDeck=[];
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var cards = ["Two of ", "Three of ", "Four of ", "Five of ", "Six of ", "Seven of ", "Eight of ", "Nine of ", "Ten of ", "Jack of ", "Queen of ", "King of ", "Ace of "];
  for(var i=0; i<suits.length; i++)
  {
    for (var j=0; j<cards.length; j++)
    {
      // var obj = {number:cards[j], suit:suits[i]};
      mainDeck.push(cards[j]+suits[i]);
    }
  }
  // console.log(mainDeck);
  shuffle(mainDeck);
}
function shuffle(mainDeck)
{
  console.log("in shuffle");
  var temporaryValue, randomIndex;
  for (var i=0; i<mainDeck.length; i++)
  {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * i);

    // And swap it with the current element.
    temporaryValue = mainDeck[i];
    mainDeck[i] = mainDeck[randomIndex];
    mainDeck[randomIndex] = temporaryValue;
  }
  // for (var j=0;j<mainDeck.length;j++)
  // {
  //   console.log(mainDeck[j].number+mainDeck[j].suit);
  // }
  console.log(mainDeck);
  assignCards(mainDeck)
}
function assignCards(mainDeck)
{
  for (var i=0; i<26;i++)
  {
    compArray.push(mainDeck[i])
  }
  for (var j=26; j<52;j++)
  {
    playerArray.push(mainDeck[j])
  }
  console.log(compArray.length);
  console.log(compArray);
  console.log(playerArray.length);
  console.log(playerArray);
}
function chooseRandomCard(array)
{

}
function checkHigher(compCard, playerCard)
{
  var compValue=0;
  var playerValue=0;
  for (var i=0; i<2; i++)
  {
    if(i===0)
      card=compCard;
    else if (i===1)
      card=playerCard;

    if(card.indexOf("Two") !== -1)
    compValue=2;
    if(card.indexOf("Three") !== -1)
    compValue=3;
    if(card.indexOf("Four") !== -1)
    compValue=4;
    if(card.indexOf("Five") !== -1)
    compValue=5;
    if(card.indexOf("Six") !== -1)
    compValue=6;
    if(card.indexOf("Seven") !== -1)
    compValue=7;
    if(card.indexOf("Eight") !== -1)
    compValue=8;
    if(card.indexOf("Nine") !== -1)
    compValue=9;
    if(card.indexOf("Jack") !== -1)
    compValue=10;
    if(card.indexOf("Queen") !== -1)
    compValue=11;
    if(card.indexOf("King") !== -1)
    compValue=12;
    if(card.indexOf("Ace") !== -1)
    compValue=13;
  }
}
function playGame()
{
  var twoButtons=document.getElementById("twoButtons");
  twoButtons.parentNode.removeChild(twoButtons);
  createDeck();
  createBoard();
}
function createBoard()
{
  board = document.createElement("div");
  board.setAttribute("id", "board")
  compDeck = document.createElement("div");
  compDeck.setAttribute("id", "compDeck");
  compCard = document.createElement("div");
  compCard.setAttribute("id", "compCard");
  playerCard = document.createElement("div");
  playerCard.setAttribute("id", "playerCard");
  playerDeck = document.createElement("div");
  playerDeck.setAttribute("id", "playerDeck");
  draw = document.createElement("div");
  draw.setAttribute("id", "draw");
  draw.innerHTML="Draw";
  board.appendChild(compDeck);
  board.appendChild(compCard);
  board.appendChild(playerCard);
  board.appendChild(playerDeck);
  board.appendChild(draw);
  body.appendChild(board);
}
