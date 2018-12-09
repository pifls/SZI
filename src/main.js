let cols = 12;
let rows = 20;

// cell width and height
let w = 40;

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
  createCanvas(801, 481);
  img = loadImage("./assets/waiter.png");
  kitchenImg = loadImage("./assets/kitchen.png");
  tableImg = loadImage("./assets/table.png");
  spotImg = loadImage("./assets/spot.png");
  plantImg = loadImage("./assets/plant.png");  
  boardImg = loadImage("./assets/board.png");  
  skaterImg = loadImage("./assets/skater.png");  
  client1Img = loadImage("./assets/client1.png");
  client2Img = loadImage("./assets/client2.png");
  client3Img = loadImage("./assets/client3.png");
  client4Img = loadImage("./assets/client4.png");
  client5Img = loadImage("./assets/client5.png");
  client6Img = loadImage("./assets/client6.png");
  client7Img = loadImage("./assets/client7.png");
  client8Img = loadImage("./assets/client8.png");

  setupGrid();

    let graph = new Graph();

   /* finding shortest path to tables */
  let client1Path = graph.findPath(waiter, client1);
  let client2Path = graph.findPath(waiter, client2);
  let client3Path = graph.findPath(waiter, client3);
  let client4Path = graph.findPath(waiter, client4);
  let client5Path = graph.findPath(waiter, client5);
  let client6Path = graph.findPath(waiter, client6);
  let client7Path = graph.findPath(waiter, client7);
  let client8Path = graph.findPath(waiter, client8);

  /* EventListeners for buttons */
  document.getElementById("btn-1").addEventListener("click", () => {

      if (waiterState == 0 && client1.state) {
          console.log("WAITER GOES TO CLIENT 1");
          console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 2");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 3");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 4");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 5");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 6");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 7");
        console.log("---------------------");
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
        console.log("WAITER GOES TO CLIENT 8");
        console.log("---------------------");
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

    let timeToLeave = 1000;
    let timeToCome = 30000;

      switch (waiterState) {
        case 1:
          let client1Path = graph.findPath(waiter, client1);
          gotoKitchen(client1Path);
          waiterState = 0;
          setTimeout(() => {
            client1.state = false;
          }, timeToLeave)

          setTimeout(() => {
            client1.state = true;
          }, timeToCome)
          break;
        case 2:
            let client2Path = graph.findPath(waiter, client2);
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
            let client3Path = graph.findPath(waiter, client3);
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
            let client4Path = graph.findPath(waiter, client4);
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
            let client5Path = graph.findPath(waiter, client5);
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
            let client6Path = graph.findPath(waiter, client6);
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
            let client7Path = graph.findPath(waiter, client7);
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
            let client8Path = graph.findPath(waiter, client8);
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

      grid[clientPath[i].i][clientPath[i].j]  = waiter;

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

      board1.active = false;
      board2.active = false;
      board3.active = false;
      board4.active = false;
      board5.active = false;
      board6.active = false;
      board7.active = false;
      board8.active = false;
      board9.active = false;
      board10.active = false;

      if (board1PositionX == clientPath[i].i && board1PositionY == clientPath[i].j){ board1.active = true;}
      grid[board1PositionX][board1PositionY] = board1;
      if (board2PositionX == clientPath[i].i && board2PositionY == clientPath[i].j){ board2.active = true;}
      grid[board2PositionX][board2PositionY] = board2;
      if (board3PositionX == clientPath[i].i && board3PositionY == clientPath[i].j){ board3.active = true;}
      grid[board3PositionX][board3PositionY] = board3;
      if (board4PositionX == clientPath[i].i && board4PositionY == clientPath[i].j){ board4.active = true;}
      grid[board4PositionX][board4PositionY] = board4;
      if (board5PositionX == clientPath[i].i && board5PositionY == clientPath[i].j){ board5.active = true;}
      grid[board5PositionX][board5PositionY] = board5;
      if (board6PositionX == clientPath[i].i && board6PositionY == clientPath[i].j){ board6.active = true;}
      grid[board6PositionX][board6PositionY] = board6;
      if (board7PositionX == clientPath[i].i && board7PositionY == clientPath[i].j){ board7.active = true;}
      grid[board7PositionX][board7PositionY] = board7;
      if (board8PositionX == clientPath[i].i && board8PositionY == clientPath[i].j){ board8.active = true;}
      grid[board8PositionX][board8PositionY] = board8;
      if (board9PositionX == clientPath[i].i && board9PositionY == clientPath[i].j){ board9.active = true;}
      grid[board9PositionX][board9PositionY] = board9;
      if (board10PositionX == clientPath[i].i && board10PositionY == clientPath[i].j){ board10.active = true;}
      grid[board10PositionX][board10PositionY] = board10;

      grid[spot1PositionX][spot1PositionY] = spot1;
      grid[spot2PositionX][spot2PositionY] = spot2;
      grid[spot3PositionX][spot3PositionY] = spot3;
      grid[spot4PositionX][spot4PositionY] = spot4;
      grid[spot5PositionX][spot5PositionY] = spot5;
      grid[spot6PositionX][spot6PositionY] = spot6;
      grid[spot7PositionX][spot7PositionY] = spot7;
      grid[spot8PositionX][spot8PositionY] = spot8;
      grid[spot9PositionX][spot9PositionY] = spot9;
      grid[spot10PositionX][spot10PositionY] = spot10;

      grid[plant1PositionX][plant1PositionY] = plant1;
      grid[plant2PositionX][plant2PositionY] = plant2;
      grid[plant3PositionX][plant3PositionY] = plant3;
      grid[plant4PositionX][plant4PositionY] = plant4;
      grid[plant5PositionX][plant5PositionY] = plant5;
      grid[plant6PositionX][plant6PositionY] = plant6;
      grid[plant7PositionX][plant7PositionY] = plant7;
      grid[plant8PositionX][plant8PositionY] = plant8;
      grid[plant9PositionX][plant9PositionY] = plant9;
      grid[plant10PositionX][plant10PositionY] = plant10;



      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          grid[i][j].addEdges(grid);
        }
      }

      console.log(`Waiter at position X: ${waiter.i} Y: ${waiter.j}`);
      console.log("---------------------");

    }, i * 350);
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

      grid[board1PositionX][board1PositionY] = board1;
      grid[board2PositionX][board2PositionY] = board2;
      grid[board3PositionX][board3PositionY] = board3;
      grid[board4PositionX][board4PositionY] = board4;
      grid[board5PositionX][board5PositionY] = board5;
      grid[board6PositionX][board6PositionY] = board6;
      grid[board7PositionX][board7PositionY] = board7;
      grid[board8PositionX][board8PositionY] = board8;
      grid[board9PositionX][board9PositionY] = board9;
      grid[board10PositionX][board10PositionY] = board10;

      grid[plant1PositionX][plant1PositionY] = plant1;
      grid[plant2PositionX][plant2PositionY] = plant2;
      grid[plant3PositionX][plant3PositionY] = plant3;
      grid[plant4PositionX][plant4PositionY] = plant4;
      grid[plant5PositionX][plant5PositionY] = plant5;
      grid[plant6PositionX][plant6PositionY] = plant6;
      grid[plant7PositionX][plant7PositionY] = plant7;
      grid[plant8PositionX][plant8PositionY] = plant8;
      grid[plant9PositionX][plant9PositionY] = plant9;
      grid[plant10PositionX][plant10PositionY] = plant10;

      grid[spot1PositionX][spot1PositionY] = spot1;
      grid[spot2PositionX][spot2PositionY] = spot2;
      grid[spot3PositionX][spot3PositionY] = spot3;
      grid[spot4PositionX][spot4PositionY] = spot4;
      grid[spot5PositionX][spot5PositionY] = spot5;
      grid[spot6PositionX][spot6PositionY] = spot6;
      grid[spot7PositionX][spot7PositionY] = spot7;
      grid[spot8PositionX][spot8PositionY] = spot8;
      grid[spot9PositionX][spot9PositionY] = spot9;
      grid[spot10PositionX][spot10PositionY] = spot10;
      

      /* adding edges to cells (it makes grid a graph) */
      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          grid[i][j].addEdges(grid);
        }
      }

}
