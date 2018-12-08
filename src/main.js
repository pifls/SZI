let cols = 15;
let rows = 25;

// cell width and height
let w = 30;

/*         0 - waiter at gotoKitchen
    1,2,3... - waiter at table 1,2.3...
*/
let waiterState = 0;

/* initialize 2D array ( 10x10 grid ) */
const make2DArray = (rows, cols) => {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}
let grid = make2DArray(rows, cols);

/* p5 function to setup some stuff */
function setup() {
  createCanvas(751, 451);
  img = loadImage("./assets/waiter.png");
  kitchenImg = loadImage("./assets/kitchen.png");
  tableImg = loadImage("./assets/table.png");
  client1Img = loadImage("./assets/client1.png");
  client2Img = loadImage("./assets/client2.png");
  client3Img = loadImage("./assets/client3.png");
  client4Img = loadImage("./assets/client4.png");
  client5Img = loadImage("./assets/client5.png");
  client6Img = loadImage("./assets/client6.png");
  client7Img = loadImage("./assets/client7.png");
  client8Img = loadImage("./assets/client8.png");

  setupGrid();

    /* adding nodes to graph (just transfering cells to graph) */
    let graph = new Graph();
    for( let i = 0; i < rows; i++){
      for( let j = 0; j < cols; j++){
        graph.addNode(grid[i][j]);
      }
    }
   /* finding shortest path to tables */
  let client1Path = graph.findPath(client1);
  let client2Path = graph.findPath(client2);
  let client3Path = graph.findPath(client3);
  let client4Path = graph.findPath(client4);
  let client5Path = graph.findPath(client5);
  let client6Path = graph.findPath(client6);
  let client7Path = graph.findPath(client7);
  let client8Path = graph.findPath(client8);

  /* EventListeners for buttons */
  document.getElementById("btn-1").addEventListener("click", () => {

      if (waiterState == 0 && client1.state) {
          waiterState = 1;
          takeOrder(client1Path);
      }
      else if (!client1.state) {
        alert("This client left");
      }
      else if (waiterState == 1) {
        alert("Waiter is at this table");
      } else {
        alert("Waiter is busy");
      }
  });
  document.getElementById("btn-2").addEventListener("click", () => {
    if (waiterState == 0 && client2.state) {
        takeOrder(client2Path);
        waiterState = 2;
    }
    else if (!client2.state) {
      alert("This client left");
    }
    else if (waiterState == 2) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-3").addEventListener("click", () => {
    if (waiterState == 0 && client3.state) {
        takeOrder(client3Path);
        waiterState = 3;
    }
    else if (!client3.state) {
      alert("This client left");
    }
    else if (waiterState == 3) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-4").addEventListener("click", () => {
    if (waiterState == 0 && client4.state) {
        takeOrder(client4Path);
        waiterState = 4;
    }
    else if (!client4.state) {
      alert("This client left");
    }
    else if (waiterState == 4) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-5").addEventListener("click", () => {
    if (waiterState == 0 && client5.state) {
        takeOrder(client5Path);
        waiterState = 5;
    }
    else if (!client5.state) {
      alert("This client left");
    }
    else if (waiterState == 5) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-6").addEventListener("click", () => {
    if (waiterState == 0 && client6.state) {
        takeOrder(client6Path);
        waiterState = 6;
    }
    else if (!client6.state) {
      alert("This client left");
    }
    else if (waiterState == 6) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-7").addEventListener("click", () => {
    if (waiterState == 0 && client7.state) {
        takeOrder(client7Path);
        waiterState = 7;
    }
    else if (!client7.state) {
      alert("This client left");
    }
    else if (waiterState == 7) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-8").addEventListener("click", () => {
    if (waiterState == 0 && client8.state) {
        takeOrder(client8Path);
        waiterState = 8;
    }
    else if (!client8.state) {
      alert("This client left");
    }
    else if (waiterState == 8) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });

  document.getElementById("btn-kitchen").addEventListener("click", () => {

    let client1Path = graph.findPath(client1);
    let client2Path = graph.findPath(client2);
    let client3Path = graph.findPath(client3);
    let client4Path = graph.findPath(client4);
    let client5Path = graph.findPath(client5);
    let client6Path = graph.findPath(client6);
    let client7Path = graph.findPath(client7);
    let client8Path = graph.findPath(client8);

    let timeToLeave = 1000;
    let timeToCome = 30000;

      switch (waiterState) {
        case 1:
          gotoKitchen(client1Path)
          waiterState = 0;
          setTimeout(() => {
            client1.state = false;
          }, timeToLeave)

          setTimeout(() => {
            client1.state = true;
          }, timeToCome)
          break;
        case 2:
            gotoKitchen(client2Path)
            waiterState = 0;
            setTimeout(() => {
              client2.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client2.state = true;
            }, timeToCome)
            break;
        case 3:
            gotoKitchen(client3Path)
            waiterState = 0;
            setTimeout(() => {
              client3.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client3.state = true;
            }, timeToCome)
            break;
        case 4:
            gotoKitchen(client4Path)
            waiterState = 0;
            setTimeout(() => {
              client4.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client4.state = true;
            }, timeToCome)
            break;
        case 5:
            gotoKitchen(client5Path)
            waiterState = 0;
            setTimeout(() => {
              client5.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client5.state = true;
            }, timeToCome)
            break;
        case 6:
            gotoKitchen(client6Path)
            waiterState = 0;
            setTimeout(() => {
              client6.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client6.state = true;
            }, timeToCome)
            break;
        case 7:
            gotoKitchen(client7Path)
            waiterState = 0;
            setTimeout(() => {
              client7.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client7.state = true;
            }, timeToCome)
            break;
        case 8:
            gotoKitchen(client8Path)
            waiterState = 0;
            setTimeout(() => {
              client8.state = false;
            }, timeToLeave)
  
            setTimeout(() => {
              client8.state = true;
            }, timeToCome)
            break;
        default:
            alert("Waiter already in the kitchen!")
      }
    });

    /* waiter goes to table */
    const takeOrder = clientPath => {

      for (let i = clientPath.length -1; i >= 0; i--) {
        (function() {
         setTimeout(function(){
        for( let i = 0; i < rows; i++){
          for( let j = 0; j < cols; j++){
            let cell = new Cell(i, j);
            grid[i][j] = cell;
          }
        }
      let waiter = new Waiter(clientPath[i].i, clientPath[i].j);
      
      grid[clientPath[i].i][clientPath[i].j]   = waiter;
      grid[kitchenPositionX][kitchenPositionY] = kitchen;
      grid[table1PositionX][table1PositionY] = table1;
      grid[table2PositionX][table2PositionY] = table2;
      grid[table3PositionX][table3PositionY] = table3;
      grid[table4PositionX][table4PositionY] = table4;
      grid[table5PositionX][table5PositionY] = table5;
      grid[table6PositionX][table6PositionY] = table6;
      grid[table7PositionX][table7PositionY] = table7;
      grid[table8PositionX][table8PositionY] = table8;
      grid[table9PositionX][table9PositionY] = table9;
      grid[table10PositionX][table10PositionY] = table10;

      grid[client1PositionX][client1PositionY] = client1;
      grid[client2PositionX][client2PositionY] = client2;
      grid[client3PositionX][client3PositionY] = client3;
      grid[client4PositionX][client4PositionY] = client4;
      grid[client5PositionX][client5PositionY] = client5;
      grid[client6PositionX][client6PositionY] = client6;
      grid[client7PositionX][client7PositionY] = client7;
      grid[client8PositionX][client8PositionY] = client8;


      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          grid[i][j].addEdges(grid);
        }
      }
      let graph = new Graph();
      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          graph.addNode(grid[i][j]);
        }
      }

      console.log(`Waiter at position X: ${waiter.i} Y: ${waiter.j}`);
      console.log("---------------------");

    }, i * 150);
      })();
      }
    }

    /* waiter goes to kitchen */
    const gotoKitchen = tablePath => {
      console.log("WAITER GOES TO THE KITCHEN");
      tablePath = tablePath.reverse();
      takeOrder(tablePath);
    }
}

/* p5 function to draw 2D grid */
function draw() {
  background(255);
  for (let i = 0; i < rows; i++) {
    for(let j=0; j < cols; j++) {
      grid[i][j].show();
    }
  }
}

/* setup grid again to make  */
const setupGrid = () => {

    /* put cells into the grid */
    for( let i = 0; i < rows; i++){
      for( let j = 0; j < cols; j++){
        let cell = new Cell(i, j);
        grid[i][j] = cell;
      }
    }
      grid[kitchenPositionX][kitchenPositionY] = kitchen;
      grid[waiterPositionX][waiterPositionY] = waiter;
      grid[table1PositionX][table1PositionY] = table1;
      grid[table2PositionX][table2PositionY] = table2;
      grid[table3PositionX][table3PositionY] = table3;
      grid[table4PositionX][table4PositionY] = table4;
      grid[table5PositionX][table5PositionY] = table5;
      grid[table6PositionX][table6PositionY] = table6;
      grid[table7PositionX][table7PositionY] = table7;
      grid[table8PositionX][table8PositionY] = table8;
      grid[table9PositionX][table9PositionY] = table9;
      grid[table10PositionX][table10PositionY] = table10;
      
      grid[client1PositionX][client1PositionY] = client1;
      grid[client2PositionX][client2PositionY] = client2;
      grid[client3PositionX][client3PositionY] = client3;
      grid[client4PositionX][client4PositionY] = client4;
      grid[client5PositionX][client5PositionY] = client5;
      grid[client6PositionX][client6PositionY] = client6;
      grid[client7PositionX][client7PositionY] = client7;
      grid[client8PositionX][client8PositionY] = client8;

      /* adding edges to cells (it makes grid a graph) */
      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          grid[i][j].addEdges(grid);
        }
      }

}
