//heroes
function setName(userName){
  heroList.userHero.heroName=userName;
  return userName;
  }
let heroList={
userHero:{
health:100,
heroName:(setName),
hits:0,
emojis:[],
allies:[],
moves:[],
equippedAlly:(equipAlly),
equippedEmoji:(equipEmoji),
  },
patrick:
{
name: "Patrick Star",
imgFile:"patrick0.jpeg",
health:50,
heroName:"Patrick",
description:"Never won an award",
hits:0,
},

mongoose:
  {
    name:"Mongoose",
    imgFile:"mongoose.jpeg",
    description:"Mongooses are good boys too",
    health:100,
    hits:0,
    modifier:20

  },
  
  fishFrog:
  {
    name:"Frog on a Fish",
    imgFile:"fishFrog.jpeg",
    description:"WTF? He do be gettin a ride, doe",
    health:125,
    hits:0,
    modifier:50
  },

  babyYoda:
  {
    imgFile:"babyyoday.jpeg",
    name:"Baby Yoda",
    description:"He speaks with his eyes",
    health:300,
    hits:0,
    modifier:300
  },
  bigNibba:{
    name:"Big Ni🅱️🅱️a",
    imgFile:"bignibba.jpeg",
    description:"His weapon is useless now, but he is still pretty big",
    health:500,
    hits:0,
    modifier:250
  },
  harambe:{
    name:"Harambe",
    imgFile:"harambe.jpeg",
    description:"He has died before and he is willing to die again",
    health:1000,
    hits:0,
    modifier:500
  },
  shaggy:{
    name:"Shaggy",
    imgFile:"shaggy.jpeg",
    description:"Champion of Earth",
    health:10000,
    hits:0
  },
  bigChungus:{
    name:"Big Chungus",
    imgFile:"bigchung.jpeg",
    description:"Destroyer of Worlds",
    health:20000,
    hits:0,
  }


}

//gain new things
function giveEmoji(emoji){
heroList.userHero.emojis.push(emoji);
}
function gainHealth(){
  heroList.userHero.health+=150;
}
function gainAlly(ally){
  heroList.userHero.allies.push(ally);
}
//equip new things
function equipAlly(ally){
heroList.userHero.equippedAlly=ally;
return ally;
}
function equipEmoji(emoji){
  heroList.userHero.equippedAlly=emoji;
  return emoji;
}

//damage items
let emojis={
  sunglasses:
  {
  image:"😎",
  name:"Sunglasses Emoji",
  modifier:10,
  description:"Look much cooler"},

  monkey:
  {
    image:"🙈",
    name:"See No Evil Emoji", 
    modifier:30,
    description:"Appear Innocent"
  },

  laughing:
  {
    image:"😂",
    name:"Laughing Emoji",
    modifier:50,
    description:"Make anything funny"
  },

  okay:
  {
    image:"👌",
    name:"OK Hand Emoji",
    modifier:100,
    description:"Make your opponent lose the game"
  }
}

//Moves
function slap(hero){
  hero.health-=1;
  update();
  hero.hits++;
}
function punch(hero){
  hero.health-=5;
  update();
  hero.hits++;
}
function kick(hero){
  hero.health-=10;
  update();
  hero.hits++;
}
function bite(hero){
  hero.health
}

//hero update

function update(hero){

  let healthPoints = heroList[hero].health.toString();//standard hp

  if(heroList[hero].health<=0&&heroList[hero].hasOwnProperty('modifier')){
    healthPoints="None. The hero is defeated.";
    heroList.userHero.allies.push(heroList[hero])//hero can be added to ally list
  }
    else{
    healthPoints="None. The hero is dead.";
    //hero cannot be added to ally list
  }
  document.getElementById("health").innerText=healthPoints;

  document.getElementById("hits").innerText=heroList[hero].hits.toString();
  document.getElementById("heroName").innerText=heroList[hero].name;
}

//html functions

function loadScreenSwitch(){
  document.getElementById("load-screen").style.display="none";
  document.getElementById("fight-screen").style.display="block";
}

