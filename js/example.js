const fruits = ["apples", "cherries", "oranges", "grapes", "lemons"];
const fruitIndex = fruits.length - 1;
console.log('fruitIndex :>> ', fruitIndex);

console.log(fruits[1] = "raspberrys");
console.log(fruits[3] = "pears");
console.log(fruits[4] = "peaches");

console.log('fruits :>> ', fruits);

for (const fruit of fruits) {
    console.log('fruit :>> ', fruit);
}