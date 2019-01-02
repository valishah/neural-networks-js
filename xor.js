const brain = require('brain.js');
const net = new brain.NeuralNetwork({  // Hidden layers to train the data set. 
    activation: 'sigmoid',
    hiddenLayers:[3], 
    learningRate: 0.6
}); 

/**
 * Training the Neural network with XOR input to find the output.
 */
const trainingData = [
    {input:[0,0], output:[0]},
    {input:[0,1], output:[1]},
    {input:[1,0], output:[1]},
    {input:[1,1], output:[0]}
];

net.train(trainingData, {
    log: (error) => console.log(error), 
    logPeroid: 100
});
console.log(net.run([0,0]));
console.log(net.run([0,1]));
console.log(net.run([1,0]));
console.log(net.run([1,1]));



