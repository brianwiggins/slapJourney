//hero constructor
class Hero{
  constructor(name,description,imgFile,health,modifier){
    this.name=name;
    this.description=description;
    this.imgFile=imgFile;
    this.health=health;
    this.modifier=modifier;
  }
  getHealth(){
    return this.health;
  }
  getName(){
    return this.name;
  }
  getDescription(){
    return this.description;
  }
  getimgFile(){
    return this.imgFile;
  }
  getModifier(){
    return this.modifier;
  }
  
}
//make a new user
let userHero = new Hero;
function makeUserHero(){
 let name = document.getElementById("name-input").innerHTML;
 let description = "A hero on a Journey";
 let imgFile = "None";
 let health = 100;//initial health
 let modifier=0;//initial modifier
 let hero = new Hero(name,description,imgFile,health,modifier);
 userHero = hero;
}

//the list of fightable heroes
//the array
let heroList = [
//each individual hero
new Hero("Patrick Star","He has never won an award","patrick0.jpeg",10,0),

new Hero("Mongoose", "Mongooses are good boys too","mongoose.jpeg",20,5),

new Hero("Frog on a fish","WTF? He do be catching a ride, doe","fishfrog.jpeg",30,10),

new Hero("Baby Yoda", "He is not edible", "babyyoday.jpeg",50,50),

new Hero("Big Ni🅱️🅱️a", "He seems pretty cool","bignibba.jpeg",100,50),

new Hero("Harambe", "He has died before and he is not afraid to die again","harambe.jpeg",500,100),

new Hero("Shaggy", "Champion of Earth","shaggy.jpeg",1000,0)

];

//switch from load to game screen
function loadScreenSwitch(){
  document.getElementById("load-screen").style.display="none";
  document.getElementById("fight-screen").style.display="block";
}

//fight sequence
let heroNumber = 0;//this number increases with each boss defeated
function fightSequence(heroNumber){
  let yourTurn = true;
  //pass in which level hero you are on (ex: patrick is level 0)
  let tempUserHealth=userHero.getHealth();
  let tempOpponentHealth=heroList[heroNumber].getHealth();
while(tempUserHealth>0&&tempOpponentHealth>=0){
if(yourTurn){
document.getElementById("your-turn").style.display="block";

//call damageCalculator
//deal damage
  yourTurn=false;
}
else{

  yourTurn=true;
}


}
}
//figure out countdown
function countdown(time){
setTimeout(countdown,1000)
time--;
return time;
}
function doMove(move){
  let damage=0;
  switch(move){
    
    case "punch":
      damage+=3;
      break;
    
    case "kick":
      damage+=5;
      break;
    
    case "eye-poke":
      damage+=7;
      break;

  }
}



for(let i=0;i<heroList.length;i++){

}





    

