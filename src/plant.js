let table1PositionX = 5;
let table1PositionY = 3;
let table1 = new Table(table1PositionX, table1PositionY, 1);
let table2PositionX = 11;
let table2PositionY = 3;
let table2 = new Table(table2PositionX, table2PositionY, 2);
let table3PositionX = 17;
let table3PositionY = 3;
let table3 = new Table(table3PositionX, table3PositionY, 3);
let table4PositionX = 5;
let table4PositionY = 6;
let table4 = new Table(table4PositionX, table4PositionY, 4);
let table5PositionX = 11;
let table5PositionY = 6;
let table5 = new Table(table5PositionX, table5PositionY, 5);
let table6PositionX = 17;
let table6PositionY = 6;
let table6 = new Table(table6PositionX, table6PositionY, 6);
let table7PositionX = 5;
let table7PositionY = 9;
let table7 = new Table(table7PositionX, table7PositionY, 7);
let table8PositionX = 11;
let table8PositionY = 9;
let table8 = new Table(table8PositionX, table8PositionY, 8);
let table9PositionX = 17;
let table9PositionY = 9;
let table9 = new Table(table9PositionX, table9PositionY, 9);
//let plant10PositionX = 14;
//let plant10PositionY = 2;
//let plant10 = new Plant(plant10PositionX, plant10PositionY);

function Plant(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.weight = 0;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);
    image(plantImg, x + 8 , y + 10, img.width / 1.3, img.height / 1.3);
    }

    this.addEdges = arr => {

      }
  }
