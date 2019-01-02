const brain = require('brain.js');

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: {Monday, Tuesday, Wednesday, etc..}
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for(let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: {[dayOfWeek]:1},
        output: {[restaurantName]:1}
    });
}

const net = new brain.NeuralNetwork({hiddenLayers:[3]}); 

const stats = net.train(trainingData);

console.log(stats);


function restaurantForDay(dayOfWeek) {
    const result = net.run({[dayOfWeek]:1});
    let highestValue = 0;
    let hightestRestaurantName = '';

    for(let restaurantName in result) {
        if(result[restaurantName] > highestValue) {
            highestValue = result[restaurantName];
            hightestRestaurantName = restaurantName;
        }
    }
    return hightestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));
