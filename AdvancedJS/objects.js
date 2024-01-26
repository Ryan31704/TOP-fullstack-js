//Object constructors

function Player(name, marker){
  this.name = name;
  this.marker = marker;
  //functions on objects
  this.sayName = function(){
    return this.name;
  };
}

const player = new Player("BOB", "X");
console.log(player.sayName());

Object.getPrototypeOf(player) === Player.prototype;

//all objects have prototype and inherit from it
//so if some property is given to the prototype of Player it will affect all Players

Player.prototype.sayHello = function()
{
  console.log("HELLO I AM " + this.name);
}
player.sayHello();

console.log(player.valueOf());

//you can set the prototype of an object to another object for example
//Object.setPrototypeOf(Player.prototype, Person.prototype);
//this makes the Player inherit from person
//========================================

