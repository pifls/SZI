
// number of pixels on one drawing ( 28x28 )
const len = 784;
// number of drawings
const total_data = 1000;

let COFFEE = 0;
let BANANA = 1;
let FISH = 2;
let HAMBURGER = 3;
let ICECREAM = 4;
let PIZZA = 5;
let WINE = 6;

let coffies_data;
let bananas_data;
let fishes_data;
let hamburgers_data;
let icecreams_data;
let pizzas_data;
let wines_data;

let coffies = {};
let bananas = {};
let fishes = {};
let hamburgers = {};
let icecreams = {};
let pizzas = {};
let wines = {};

let nn;

function prepareData(category, data, label) {
  category.training = [];
  category.testing = [];
  for (let i = 0; i < total_data; i++) {
    let offset = i * len;
    // splitting data into 80 / 100 ( training/tests)
    let threshold = floor(0.8 * total_data);
    if (i < threshold) {
      category.training[i] = data.bytes.subarray(offset, offset + len);
      category.training[i].label = label;
    } else {
      category.testing[i - threshold] = data.bytes.subarray(offset, offset + len);
      category.testing[i - threshold].label = label;
    }
  }
}
const trainNetwork = training => {
  shuffle(training, true);

  // Train network
  for (let i = 0; i < training.length; i++) {
    let inputs = [];
    let data = training[i];
    // normalizing entry data
    inputs = Array.from(data).map(x => x / 255);
    
    let label = training[i].label;
    let targets = [0, 0, 0, 0, 0, 0, 0];
    targets[label] = 1;

    nn.train(inputs, targets);
  }
  console.log("network trained");
  document.getElementById("output").innerHTML = `Network trained`;
}

const testAll = testing => {
  let correct = 0;

  for (let i = 0; i < testing.length; i++) {
    let inputs = [];
    let data = testing[i];
    // normalizing entry data
    inputs = Array.from(data).map(x => x / 255);
    let label = testing[i].label;
    let guess = nn.predict(inputs);
    let m = max(guess);
    let classification = guess.indexOf(m);
    if ( classification === label) {
      correct++;
    } 
  }
  let percent = 100 * correct / testing.length;
  console.log(`Percent: ${nf(percent, 2, 2)}%`);
  document.getElementById("output").innerHTML = `Percent: ${nf(percent, 2, 2)}%`;
}

  preload = function() {
   hide();

   coffies_data = loadBytes('./podprojekt1/data/coffee1000.bin');
   bananas_data = loadBytes('./podprojekt1/data/banana1000.bin');
   fishes_data = loadBytes('./podprojekt1/data/fish1000.bin');
   hamburgers_data = loadBytes('./podprojekt1/data/hamburger1000.bin');
   icecreams_data = loadBytes('./podprojekt1/data/icecream1000.bin');
   pizzas_data = loadBytes('./podprojekt1/data/pizza1000.bin');
   wines_data = loadBytes('./podprojekt1/data/wine1000.bin');
 }

 let canvas;

 let t = function( p ) { 
 p.setup = function() {
  canvas = p.createCanvas(280, 280);
  p.background(255);

}

p.draw = function() {
  p.strokeWeight(18);
  p.stroke(0);
  if(mouseIsPressed) {
    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
  }
}

};


const setupPodprojekt1 = () => {
  prepareData(coffies, coffies_data, COFFEE);
  prepareData(bananas, bananas_data, BANANA);
  prepareData(fishes, fishes_data, FISH);
  prepareData(hamburgers, hamburgers_data, HAMBURGER);
  prepareData(icecreams, icecreams_data, ICECREAM);
  prepareData(pizzas, pizzas_data, PIZZA);
  prepareData(wines, wines_data, WINE);

  nn = new NeuralNetwork(784, 64, 7);

  let training = [];
  training = training.concat(coffies.training);
  training = training.concat(bananas.training);
  training = training.concat(fishes.training);
  training = training.concat(hamburgers.training);
  training = training.concat(icecreams.training);
  training = training.concat(pizzas.training);
  training = training.concat(wines.training);
 
  let testing = [];
  testing = testing.concat(coffies.testing);
  testing = testing.concat(bananas.testing);
  testing = testing.concat(fishes.testing);
  testing = testing.concat(hamburgers.testing);
  testing = testing.concat(icecreams.testing);
  testing = testing.concat(pizzas.testing);
  testing = testing.concat(wines.testing);

  document.getElementById("train").addEventListener("click", function(){ trainNetwork(training)});
  document.getElementById("test").addEventListener("click", function(){ testAll(testing) });
  document.getElementById("clear").addEventListener("click", function(){ 
    canvas.background(255);
    document.getElementById("output").innerHTML = `Add another dish or order`;});
  document.getElementById("guess").addEventListener("click", function(){
      let inputs = [];
      let img = canvas.get();
      img.resize(28, 28);
      img.loadPixels();
      for (let i = 0; i < len; i++) {
        let bright = img.pixels[i * 4];
        inputs[i] = (255 - bright) / 255.0;
      }

      let guess = nn.predict(inputs);
      let m = max(guess);
      let classification = guess.indexOf(m);

      let ordered = '';
      switch(classification) {
        case COFFEE:
          document.getElementById("output").innerHTML = `You ordered COFFEE`;
          ordered = 'coffee';
          break;
        case BANANA:
          document.getElementById("output").innerHTML = `You ordered BANANA`;
          ordered = 'banana';
          break;
        case FISH:
          document.getElementById("output").innerHTML = `You ordered FISH`;
          ordered = 'fish';
          break;
        case HAMBURGER:
          document.getElementById("output").innerHTML = `You ordered HAMBURGER`;
          ordered = 'hamburger';
          break;
        case ICECREAM:
          document.getElementById("output").innerHTML = `You ordered ICE CREAM`;
          ordered = 'ice cream';
          break;
        case PIZZA:
          document.getElementById("output").innerHTML = `You ordered PIZZA`;
          ordered = 'pizza';
          break;
        case WINE:
          document.getElementById("output").innerHTML = `You ordered WINE`;
          ordered = 'wine';
          break;
        default:
          console.log("ERROR");
      }
      switch(waiterState){
        case 1:
          client1.orders.push(ordered);
          break;
        case 2:
          client2.orders.push(ordered);
          break;
        case 3:
          client3.orders.push(ordered);
          break;
        case 4:
          client4.orders.push(ordered);
          break;
        case 5:
          client5.orders.push(ordered);
          break;
        case 6:
          client6.orders.push(ordered);
          break;
        case 7:
          client7.orders.push(ordered);
          break;
        case 8:
          client8.orders.push(ordered);
          break;
        default:
          console.log('ERROR adding dish to client');
      }
   });

}


var myp5 = new p5(t, 'drawDish');