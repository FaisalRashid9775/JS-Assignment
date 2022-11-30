var favorite_fruit = ["Orange", "Apples", "Mango"];

var findFruit = favorite_fruit.find((e) => e === "Mango");
var findFruitUpperCase = findFruit.toUpperCase();
if (findFruitUpperCase === "MANGO") {
  console.log(findFruitUpperCase, "is your favoutite fruit");
} else {
  console.log("Fruit not found in array");
}

var findFruit = favorite_fruit.find((e) => e === "Apples");
var findFruitUpperCase = findFruit.toUpperCase();
if (findFruitUpperCase === "APPLES") {
  console.log(findFruitUpperCase, "is your favoutite fruit");
} else {
  console.log("Fruit not found in array");
}
var findFruit = favorite_fruit.find((e) => e === "Bery");
if (findFruit != undefined) {
  var findFruitUpperCase = findFruit.toUpperCase();

  if (findFruitUpperCase === "BEERY") {
    console.log(findFruitUpperCase, "is your favoutite fruit");
  } else {
    console.log("Fruit not found in array");
  }
}
else {
    console.log('Fruit not Found')
}
 
var findFruit = favorite_fruit.find((e) => e === "Graphs");
if (findFruit != undefined) {
  var findFruitUpperCase = findFruit.toUpperCase();

  if (findFruitUpperCase === "GRAPHS") {
    console.log(findFruitUpperCase, "is your favoutite fruit");
  } else {
    console.log("Fruit not found in array");
  }
}
else {
    console.log('Fruit not Found')
}
var findFruit = favorite_fruit.find((e) => e === "Cherry");
if (findFruit != undefined) {
  var findFruitUpperCase = findFruit.toUpperCase();

  if (findFruitUpperCase === "CHEERY") {
    console.log(findFruitUpperCase, "is your favoutite fruit");
  } else {
    console.log("Fruit not found in array");
  }
}
else {
    console.log('Fruit not Found')
}

