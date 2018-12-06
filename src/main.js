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
  img1 = loadImage("./assets/kitchen.png");
  entryIcon = loadImage("./assets/entry.png");
  //frameRate(4);

  setupGrid();

    /* adding nodes to graph (just transfering cells to graph) */
    let graph = new Graph();
    for( let i = 0; i < rows; i++){
      for( let j = 0; j < cols; j++){
        graph.addNode(grid[i][j]);
      }
    }
   /* finding shortest path to tables */
  let table1Path = graph.findPath(table1);
  let table2Path = graph.findPath(table2);
  let table3Path = graph.findPath(table3);
  let table4Path = graph.findPath(table4);
  let table5Path = graph.findPath(table5);
  let table6Path = graph.findPath(table6);
  let table7Path = graph.findPath(table7);
  let table8Path = graph.findPath(table8);
  let table9Path = graph.findPath(table9);
  let table10Path = graph.findPath(table10);
  /* EventListeners for buttons */
  document.getElementById("btn-1").addEventListener("click", () => {
      if (waiterState == 0) {
          waiterState = 1;
          takeOrder(table1Path);
      }
      else if (waiterState == 1) {
        alert("Waiter is at this table");
      } else {
        alert("Waiter is busy");
      }
  });
  document.getElementById("btn-2").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table2Path);
        waiterState = 2;
    }
    else if (waiterState == 2) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-3").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table3Path);
        waiterState = 3;
    }
    else if (waiterState == 3) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-4").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table4Path);
        waiterState = 4;
    }
    else if (waiterState == 4) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-5").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table5Path);
        waiterState = 5;
    }
    else if (waiterState == 5) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-6").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table6Path);
        waiterState = 6;
    }
    else if (waiterState == 6) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-7").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table7Path);
        waiterState = 7;
    }
    else if (waiterState == 7) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-8").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table8Path);
        waiterState = 8;
    }
    else if (waiterState == 8) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-9").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table9Path);
        waiterState = 9;
    }
    else if (waiterState == 9) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });
  document.getElementById("btn-10").addEventListener("click", () => {
    if (waiterState == 0) {
        takeOrder(table10Path);
        waiterState = 10;
    }
    else if (waiterState == 10) {
      alert("Waiter already at this table");
    } else {
      alert("Waiter is busy");
    }
  });

  document.getElementById("btn-kitchen").addEventListener("click", () => {


    let table1Path = graph.findPath(table1);
    let table2Path = graph.findPath(table2);
    let table3Path = graph.findPath(table3);
    let table4Path = graph.findPath(table4);
    let table5Path = graph.findPath(table5);
    let table6Path = graph.findPath(table6);
    let table7Path = graph.findPath(table7);
    let table8Path = graph.findPath(table8);
    let table9Path = graph.findPath(table9);
    let table10Path = graph.findPath(table10);

      switch (waiterState) {
        case 1:
          gotoKitchen(table1Path)
          waiterState = 0;
          break;
        case 2:
            gotoKitchen(table2Path)
            waiterState = 0;
            break;
        case 3:
            gotoKitchen(table3Path)
            waiterState = 0;
            break;
        case 4:
            gotoKitchen(table4Path)
            waiterState = 0;
            break;
        case 5:
            gotoKitchen(table5Path)
            waiterState = 0;
            break;
        case 6:
            gotoKitchen(table6Path)
            waiterState = 0;
            break;
        case 7:
            gotoKitchen(table7Path)
            waiterState = 0;
            break;
        case 8:
            gotoKitchen(table8Path)
            waiterState = 0;
            break;
        case 9:
            gotoKitchen(table9Path)
            waiterState = 0;
            break;
        case 10:
            gotoKitchen(table10Path)
            waiterState = 0;
            break;
        default:
            alert("Waiter is in kitchen!")
      }
    });

    /* waiter goes to table */
    const takeOrder = tablePath => {

      for (let i = tablePath.length -1; i >= 0; i--) {
        (function() {
         setTimeout(function(){
        for( let i = 0; i < rows; i++){
          for( let j = 0; j < cols; j++){
            let cell = new Cell(i, j);
            grid[i][j] = cell;
          }
        }
      let waiter = new Waiter(tablePath[i].i, tablePath[i].j);
      
      grid[tablePath[i].i][tablePath[i].j]   = waiter;
      grid[kitchenPositionX][kitchenPositionY] = kitchen;
      grid[entryPositionX][entryPositionY] = entry;
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

      console.log(waiter);
      console.log("---------------------");

    }, i * 130);
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
      grid[entryPositionX][entryPositionY] = entry;
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

      /* adding edges to cells (it makes grid a graph) */
      for( let i = 0; i < rows; i++){
        for( let j = 0; j < cols; j++){
          grid[i][j].addEdges(grid);
        }
      }

}
