/**
 * Recurrent Neural Network
 */
const brain = require('brain.js');

// 1-5 , 5-1

const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4])) // Output: 4.981447696685791
console.log(net.run([5,4,3,2])) // Output: 0.9953063726425171


console.log(net.run([1,2])) // Output: 2.9922587871551514
console.log(net.run([5,4])) // Output: 2.993675947189331