//Lexical environment means the scope of variables which are defined in a block of code.
//Think of it as a box or the outer shell.
//While Lexical scope is the ability of a function scope to access variables from parent scope.
function greeting() {
  const name = "John";
}
//Map() .  it transforms items in an Array

const actors = [
  {
    name: "Andile Ncube",
    age: 40,
    origin: "Zimbambwe",
    gender: "Male",
  },
  {
    name: "Diamond Platinum",
    age: 32,
    origin: "Tanzania",
    gender: "Male",
  },
  {
    name: "Kayleigh Shwark",
    age: 35,
    origin: "SA",
    gender: "Female",
  },
  {
    name: "Swankie Jerry",
    age: 39,
    origin: "SA",
    gender: "Male",
  },
  {
    name: "Zari Hassan",
    age: 44,
    origin: "Uganda",
    gender: "Female",
  },
  {
    name: "Annie Idibia",
    age: 41,
    origin: "Nigeria",
    gender: "Female",
  },
];
//1. Get names of actors
const names = actors.map((actors) => actors.name);
console.log(names);
//2. Get ages of actors
const age = actors.map((actors) => actors.age);
console.log(age);
//3. Get names and the ages of the actors
const nameAndAge = actors.map((actors) => ({
  name: actors.name,
  age: actors.age,
}));
console.log(nameAndAge);

/**FILTER METHOD */
//Remain with what should be included in the new array.
//1. Get actors that are below 40 years old
const belowFourty = actors.filter((actors) => actors.age < 40);
console.log(belowFourty);

//2. Get actors above 40 years old
const aboveFourty = actors.filter((actors) => actors.age > 39);
console.log(aboveFourty);

//3. Get actors who are male
const maleActors = actors.filter((actors) => actors.gender === "Male");
console.log(maleActors);

//3. Get actors who are Female
const FemaleActors = actors.filter((actors) => actors.gender === "Female");
console.log(FemaleActors);

//map creates a new array by transforming every element in an array individually.
//filter creates a new array by removing elements that don't belong.
//reduce, on the other hand, takes all of the elements in an array and reduces them into a single value.

// *** REDUCE METHOD **/
//1. Get total age of all the actors
const totalAge = actors.reduce((total, actor) => total + actor.age, 0);
console.log(totalAge);

//2. Get the average age of all actors
const averageAge = totalAge / actors.length;
console.log(averageAge);

//3. Total number of characters in actors names
const totalCharacters = actors.reduce(
  (total, actor) => total + actor.name.length,
  0
);
console.log(totalCharacters);

//4. get number of actors
const numberOfActors = actors.reduce((total, actor) => total + 1, 0);
console.log(numberOfActors);

//***FIND METHOD */
//It works like filter, but it only returns the first element that matches the condition.And returns undefined if no element matches the condition.
//1. Get the first actor with age of 40
const firstActor40 = actors.find((actor) => actor.age === 40);
console.log(firstActor40);
//2. Get the first actor with age of 44
const firstActor44 = actors.find((actor) => actor.age === 44);
console.log(firstActor44);

//***FOR EACH METHOD */
//It works like map, but it doesn't create a new array.It works on every element in an array individually.
//it doesn't return anything. but instead it modifies the original array.
//1. Add money to every actor
const addMoney = actors.forEach((actor) => {
  actor.money = 100;
});
console.log(actors);

//***SORT METHOD */
//It sorts the elements in an array.  It works on the basis of the value of the elements. It doesn't return anything. but instead it modifies the original array.
//Uses comparitor function  a and b to sort the array.
//1. Sort actors by age
const sortedActors = actors.sort((a, b) => a.age - b.age);
console.log(sortedActors);
//2. Sort actors by name
const sortedActorsByName = actors.sort((a, b) => {
  (a.name > b.name) - (b.name > a.name);
});
console.log(sortedActorsByName);

//3. Sort actors by gender(female first)
const femaleGenderSort = actors.sort((a, b) => {
  if (a.gender === "Female") return -1;
  return 1;
});
console.log(femaleGenderSort);

//4. Sort actors to get male first
const maleGenderSort = actors.sort((a, b) => {
  if (a.gender === "Female") return 1;
  return -1;
});
console.log(maleGenderSort);
