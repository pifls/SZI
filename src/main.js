let cols = 10;
let rows = 10;

// cell width and height
let w = 20;

const make2DArray = (cols, rows) => {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let grid = make2DArray(cols, rows);


function setup() {
  createCanvas(201, 201);
  img = loadImage("./assets/waiter.png");

  for( let i = 0; i < rows; i++){
    for( let j = 0; j < cols; j++){
      let cell = new Cell(i, j);
      grid[i][j] = cell;
    }
  }
    grid[waiterPositionX][waiterPositionY] = waiter;
    grid[table1PositionX][table1PositionY] = table1;
    grid[table2PositionX][table2PositionY] = table2;
    grid[table3PositionX][table3PositionY] = table3;
    grid[table4PositionX][table4PositionY] = table4;
    grid[table5PositionX][table5PositionY] = table5;
    grid[table6PositionX][table6PositionY] = table6;
}

function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for(let j=0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}