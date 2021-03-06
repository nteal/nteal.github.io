/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "cat";
animal["name"] = "Sparkles the Kitty";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "yeow";
noises.push("purrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
noises.unshift("mwahahahaha");
noises.push("hiccup");

console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("hisssssssss");
console.log(animal);    



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
            1) bracket syntax
            2) dot notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 
            1) bracket notation
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);//looks like an array with a single object in it(the object we made earlier);
var duck = {
    species : 'duck',
    name: "Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
}
animals.push(duck);
console.log(animals);//looks like an array with 2 objects; animals and duck from earlier
var fox = {
    species: "fox",
    name: "Foxy the Fox",
    noises: ["WAPAPAPAPAPAPAAAAA", "ka^ka_kakakakakakakaaaaaaaaaaaa"],
}
var huskie = {
    species: "dog",
    name: "Sheevah the Huskie",
    noises: ["nooooooooooooooo-oooooooooo", "I wuv you"],
}
animals.push(fox, huskie);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];//chose array because its good for holding lists
function getRandom(list){
    return Math.floor(Math.random() * list.length);
}

friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[getRandom(animals)].friends = friends;
console.log("getRandom is ", typeof getRandom);
/*
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
